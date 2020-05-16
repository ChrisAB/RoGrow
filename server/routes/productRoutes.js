const express = require('express');
const productController = require('../controllers/userController');

const router = express.Router();

router
  .route('/')
  .get(productController.getAllUsers)
  .post(productController.createUser);

router
  .route('/:id')
  .get(productController.getUser)
  .patch(productController.updateUser)
  .delete(productController.deleteUser);

module.exports = router;
