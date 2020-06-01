const rp = require('request-promise');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const options = {
    uri: `http://${process.env.DATABASE_ADDRESS}:${process.env.DATABASE_PORT}/product`,
    json: true,
  };
  const products = await rp(options);
  if (products === undefined)
    return next(new AppError('Database failed to respond'), 500);
  res.status(200).json({
    status: 'success',
    data: products,
  });
});

exports.getProduct = catchAsync(async (req, res, next) => {
  const options = {
    uri: `http://${process.env.DATABASE_ADDRESS}:${process.env.DATABASE_PORT}/product`,
    qs: {
      id: req.data.id,
    },
    json: true,
  };
  const products = await rp(options);
  if (products === undefined) return next(new AppError('No such product', 404));
  res.status(200).son({
    status: 'success',
    data: products,
  });
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
