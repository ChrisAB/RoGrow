const rp = require('request-promise');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Product = require('../models/productModel');

exports.getAllProducts = catchAsync(async (req, res, next) => {
  if (req.query.length > 0) return next();

  const options = {
    uri: `http://${process.env.DATABASE_ADDRESS}:${process.env.DATABASE_PORT}/product`,
    json: true,
  };
  const products = await rp(options);
  if (products.data === null)
    return next(new AppError('Database failed to respond'), 500);
  res.status(200).json({
    status: 'success',
    data: products.data,
  });
});

exports.searchProduct = catchAsync(async (req, res, next) => {
  const options = {
    uri: `http://${process.env.DATABASE_ADDRESS}:${process.env.DATABASE_PORT}/product`,
    qs: req.query,
    json: true,
  };
  const products = await rp(options);
  if (products.data === null)
    return next(new AppError('No such products exist', 404));
  res.status(200).json({ status: 'success', data: products.data });
});

exports.getProduct = catchAsync(async (req, res, next) => {
  const options = {
    uri: `http://${process.env.DATABASE_ADDRESS}:${process.env.DATABASE_PORT}/product/${req.params.id}`,
    json: true,
  };
  const product = await rp(options);
  if (product.data === null) return next(new AppError('No such product', 404));
  res.status(200).json({
    status: 'success',
    data: product.data,
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
      sellerID: verifyUser.id,
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
  const token = req.headers.authorization.split(' ')[1];
  const verifyUser = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  let options = {
    method: 'GET',
    uri: `http://${process.env.DATABASE_ADDRESS}:${process.env.DATABASE_PORT}/product/${req.params.id}`,
    json: true,
  };
  const product = await rp(options);
  if (product.data === null) return next(new AppError('No such product', 404));

  if (verifyUser.id !== product.data.sellerID)
    return next(new AppError('Invalid access', 405));

  options = {
    method: 'PATCH',
    uri: `http://${process.env.DATABASE_ADDRESS}:${process.env.DATABASE_PORT}/product/${req.params.id}`,
    body: {
      $set: req.body,
    },
    json: true,
  };

  const newProduct = await rp(options);

  if (newProduct.status === 'fail')
    return next(new AppError('Could not update user info'), 500);
  res.status(200).json({ status: 'success', data: newProduct.data });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const verifyUser = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  let options = {
    method: 'GET',
    uri: `http://${process.env.DATABASE_ADDRESS}:${process.env.DATABASE_PORT}/product/${req.params.id}`,
    json: true,
  };
  const products = await rp(options);
  if (products.data === null) return next(new AppError('No such product', 404));

  if (verifyUser.id !== products.data.sellerID)
    return next(new AppError('Invalid access', 405));

  options = {
    method: 'DELETE',
    uri: `http://${process.env.DATABASE_ADDRESS}:${process.env.DATABASE_PORT}/product/${req.params.id}`,
    json: true,
  };

  const deletedProduct = await rp(options);
  if (deletedProduct.status === 'fail')
    return next(new AppError('Could not delete product'), 500);

  res.status(200).json({ status: 'success', data: null });
});
