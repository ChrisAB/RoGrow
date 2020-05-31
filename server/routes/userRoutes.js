const express = require('express');
const userController = require('../controllers/userController');
const authContoller = require('../controllers/authController');

const router = express.Router();

router.route('/login').post(authContoller.loginUser);

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(authContoller.protect, userController.updateUser)
  .delete(authContoller.protect, userController.deleteUser);

module.exports = router;
