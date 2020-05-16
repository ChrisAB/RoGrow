const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  return next(new AppError('Not yet implemented', 404));
});

exports.getUser = catchAsync(async (req, res, next) => {
  return next(new AppError('Not yet implemented', 404));
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
