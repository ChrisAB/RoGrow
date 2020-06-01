const rp = require('request-promise');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Product = require('../models/productModel');

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
    uri: `http://${process.env.DATABASE_ADDRESS}:${process.env.DATABASE_PORT}/product/${req.data.id}`,
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
  const token = req.headers.authorization.split(' ')[1];
  const {
    name,
    category,
    subcategory,
    description,
    price,
    quantity,
    pickupLocation,
    origin,
    sellerID,
  } = req.body;
  const productToCreate = await new Product(
    null,
    name,
    category,
    subcategory,
    description,
    price,
    quantity,
    pickupLocation,
    origin,
    sellerID
  );
  const verifyUser = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  if (verifyUser.id !== sellerID)
    return next(new AppError('Invalid access', 405));
  const verify = await productToCreate.verify();
  if (verify !== true) return next(new AppError(verify, 400));

  const options = {
    method: 'PUT',
    uri: `http://${process.env.DATABASE_ADDRESS}:${process.env.DATABASE_PORT}/product`,
    body: {
      name,
      category,
      subcategory,
      description,
      price,
      quantity,
      pickupLocation,
      origin,
      sellerID,
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

exports.updateProduct = catchAsync(async (req, res, next) => {
  return next(new AppError('Not yet implemented', 404));
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  return next(new AppError('Not yet implemented', 404));
});
