const { promisify } = require('util');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const LoginUser = require('../models/loginUserModel');
const RegisterUser = require('../models/registerUserModel');
const userController = require('./userController');

exports.loginUser = catchAsync(async (req, res, next) => {
  const { id, password } = req.body;
  if (!id || !password)
    return next(new AppError('No email or password defined'), 400);
  const userLoginRequest = LoginUser(id, password);
  const userFromDatabase = await userController.getUser(userLoginRequest.id);

  if (
    !userFromDatabase ||
    !(await userFromDatabase.correctPassword(userLoginRequest.password))
  )
    return next(new AppError('Incorrect id or password!'), 401);

  const token = await jwt.sign(
    { id: userFromDatabase.id },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );

  res.status(200).json({
    status: 'success',
    token: token,
  });
});

exports.registerUser = catchAsync(async (req, res, next) => {
  const userToBeRegistered = RegisterUser(req.body.data);
  userToBeRegistered.password = await bcrypt.hash(userToBeRegistered.password);
  const newUser = await userController.createUser(userToBeRegistered);
  if (!newUser) return next(new AppError('Could not register'), 500);

  res.status(201).json({
    status: 'success',
    data: {
      userID: newUser.dbID,
    },
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) return next(new AppError('Not logged in!'), 401);
  const decodedPayload = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );

  const freshUser = await userController.getUser(decodedPayload.id);
  if (!freshUser)
    return next(
      new AppError('The user belonging to this token no longer exists'),
      401
    );

  if (freshUser.changedPasswordAfter(decodedPayload.iat))
    return next(
      new AppError('User recently changed password! Please login again', 401)
    );

  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = freshUser;
  next();
});
