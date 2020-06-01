const bcrypt = require('bcryptjs');
const rp = require('request-promise');
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
  if (user === null) return next(new AppError('No such user', 404));
  user.Password = undefined;
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
  const userToBeRegistered = await new RegisterUser(
    firstName,
    lastName,
    password,
    confirmPassword,
    email,
    country,
    region,
    address
  );
  const verify = await userToBeRegistered.verify();
  if (verify !== true) next(new AppError(verify, 400));
  userToBeRegistered.password = await bcrypt.hash(
    userToBeRegistered.password,
    12
  );
  const options = {
    method: 'PUT',
    uri: `http://${process.env.DATABASE_ADDRESS}:${process.env.DATABASE_PORT}/user`,
    body: {
      FirstName: userToBeRegistered.firstName,
      LastName: userToBeRegistered.lastName,
      Password: userToBeRegistered.password,
      Email: userToBeRegistered.email,
      County: userToBeRegistered.city,
      Region: userToBeRegistered.region,
      Address: userToBeRegistered.address,
      SellerOrClientFlag: 'buyer',
    },
    json: true,
  };
  const newUser = await rp(options);
  if (newUser === undefined)
    return next(new AppError('Could not register'), 500);
  res.status(201).json({
    status: 'success',
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const options = {
    method: 'PATCH',
    uri: `http://${process.env.DATABASE_ADDRESS}:${process.env.DATABASE_PORT}/user`,
    qs: {
      userId: req.body.userId,
    },
    body: {
      FirstName: req.body.firstName,
      LastName: req.body.lastName,
      County: req.body.city,
      Region: req.body.region,
      Address: req.body.address,
      SellerOrClientFlag: 'buyer',
    },
    json: true,
  };
  const newUser = await rp(options);
  if (newUser === undefined)
    return next(new AppError('Could not update user info'), 500);
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  return next(new AppError('Not yet implemented', 404));
});

exports.loginUser = catchAsync(async (req, res, next) => {
  res.end('haha');
});
