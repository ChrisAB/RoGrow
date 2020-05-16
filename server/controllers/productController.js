const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllProducts = catchAsync(async (req, res, next) => {
  return next(new AppError('Not yet implemented', 404));
});

exports.getProduct = catchAsync(async (req, res, next) => {
  return next(new AppError('Not yet implemented', 404));
});

exports.createProduct = catchAsync(async (req, res, next) => {
  return next(new AppError('Not yet implemented', 404));
});

exports.updateProduct = catchAsync(async (req, res, next) => {
  return next(new AppError('Not yet implemented', 404));
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  return next(new AppError('Not yet implemented', 404));
});
