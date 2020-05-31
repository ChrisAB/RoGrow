const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const LoginUser = require('../models/loginUserModel');
const userController = require('./userController');

exports.loginUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(new AppError('No email or password defined'), 400);
  const userLoginRequest = LoginUser(email, password);
  const userFromDatabase = await userController.getUser(userLoginRequest.email);

  if (
    !userFromDatabase ||
    !(await userFromDatabase.correctPassword(userLoginRequest.password))
  )
    return next(new AppError('Incorrect id or password!'), 400);

  const token = await jwt.sign(
    { id: userFromDatabase._id },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
  res.cookie('jwt', token, cookieOptions);
  userFromDatabase.password = undefined;

  res.status(200).json({
    status: 'success',
    token: token,
    data: {
      userFromDatabase,
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
