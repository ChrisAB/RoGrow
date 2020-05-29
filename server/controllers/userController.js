const rp = require('request-promise');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const options = {
    uri: `http://${process.env.DATABASE_ADDRESS}:${process.env.DATABASE_PORT}/user`,
    json: true,
  };
  const users = await rp.options(options);
  if (users.data.status === 'fail')
    return next(new AppError('Database failed to respond'), 500);
  res.status(200).json({
    status: 'success',
    data: users,
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const options = {
    uri: `http://${process.env.DATABASE_ADDRESS}:${process.env.DATABASE_PORT}/user`,
    qs: {
      id: req.data.id,
    },
    json: true,
  };
  const user = await rp.options(options);
  if (user.data.status === 'fail')
    return next(new AppError('No such user', 404));
  res.status(200).son({
    status: 'success',
    data: user,
  });
});

exports.createUser = catchAsync(async (req, res, next) => {
  return next(new AppError('Not yet implemented', 404));
});

exports.updateUser = catchAsync(async (req, res, next) => {
  return next(new AppError('Not yet implemented', 404));
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  return next(new AppError('Not yet implemented', 404));
});
