const bcrypt = require('bcryptjs');
const rp = require('request-promise');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const RegisterUser = require('../models/registerUserModel');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const options = {
    uri: `http://${process.env.DATABASE_ADDRESS}:${process.env.DATABASE_PORT}/user`,
    json: true,
  };
  const users = await rp(options);
  if (users.users === undefined)
    return next(new AppError('Database failed to respond'), 500);
  res.status(200).json({
    status: 'success',
    data: users,
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const options = {
    uri: `http://${process.env.DATABASE_ADDRESS}:${process.env.DATABASE_PORT}/user/${req.params.id}`,
    json: true,
  };
  const user = await rp(options);
  if (user.status === 'fail') return next(new AppError('No such user', 404));
  user.password = undefined;
  res.status(200).json({
    status: 'success',
    data: user,
  });
});

exports.createUser = catchAsync(async (req, res, next) => {
  const {
    firstName,
    lastName,
    password,
    confirmPassword,
    email,
    country,
    region,
    address,
  } = req.body;
  let CUI;
  let role;
  // eslint-disable-next-line prefer-destructuring
  if (req.body.CUI) {
    CUI = req.body.CUI;
    role = 'seller';
  } else role = 'buyer';
  const userToBeRegistered = await new RegisterUser(
    firstName,
    lastName,
    password,
    confirmPassword,
    email,
    country,
    region,
    address,
    role,
    CUI
  );
  const verify = await userToBeRegistered.verify();
  if (verify !== true) return next(new AppError(verify, 400));
  userToBeRegistered.password = await bcrypt.hash(
    userToBeRegistered.password,
    12
  );

  const optionsCheck = {
    method: 'GET',
    uri: `http://${process.env.DATABASE_ADDRESS}:${process.env.DATABASE_PORT}/user/${email}`,
    qs: {
      email: email,
    },
    json: true,
  };

  const isUserAlreadyRegistered = await rp(optionsCheck);
  if (isUserAlreadyRegistered.status === 'error')
    return next(new AppError('Database communication failed', 500));
  if (isUserAlreadyRegistered.data !== null)
    return next(new AppError('Email is already in use', 400));

  const options = {
    method: 'PUT',
    uri: `http://${process.env.DATABASE_ADDRESS}:${process.env.DATABASE_PORT}/user`,
    body: {
      firstName: userToBeRegistered.firstName,
      lastName: userToBeRegistered.lastName,
      password: userToBeRegistered.password,
      email: userToBeRegistered.email,
      county: userToBeRegistered.city,
      region: userToBeRegistered.region,
      address: userToBeRegistered.address,
      role: userToBeRegistered.role,
      CUI: userToBeRegistered.CUI,
    },
    json: true,
  };
  const newUser = await rp(options);
  if (newUser.status === 'fail')
    return next(new AppError('Could not register'), 500);

  res.status(201).json({
    status: 'success',
    data: newUser.data,
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const verifyUser = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  if (verifyUser.id !== req.params.id)
    return next(new AppError('Invalid access', 405));

  const options = {
    method: 'PATCH',
    uri: `http://${process.env.DATABASE_ADDRESS}:${process.env.DATABASE_PORT}/user/${req.params.id}`,
    body: {
      $set: req.body,
    },
    json: true,
  };

  const newUser = await rp(options);
  if (newUser === undefined)
    return next(new AppError('Could not update user info'), 500);
  res.status(200).json({ status: 'success', data: newUser });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const verifyUser = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  if (verifyUser.id !== req.params.id)
    return next(new AppError('Invalid access', 405));

  const options = {
    method: 'DELETE',
    uri: `http://${process.env.DATABASE_ADDRESS}:${process.env.DATABASE_PORT}/user/${req.params.id}`,
    json: true,
  };

  const newUser = await rp(options);
  if (newUser.status === 'fail')
    return next(new AppError('Could not delete user'), 500);

  res.status(200).json({ status: 'success', data: null });
});
