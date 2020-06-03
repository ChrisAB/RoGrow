const express = require('express');
const productController = require('../controllers/productController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, productController.getAllProducts)
  .get(authController.protect, productController.searchProduct)
  .post(authController.protect, productController.createProduct);

router
  .route('/:id')
  .get(authController.protect, productController.getProduct)
  .patch(authController.protect, productController.updateProduct)
  .delete(authController.protect, productController.deleteProduct);

module.exports = router;
