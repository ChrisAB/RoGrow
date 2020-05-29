const rp = require('request-promise');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const LoginUser = require('../models/loginUserModel');
const RegisterUser = require('../models/registerUserModel');
const User = require('../models/userModel');

async function getUserFromDatabase(userID) {
  const options = {
    uri: 'http://localhost:3000/user',
    qs: {
      id: userID,
    },
  };
  const userDatabaseResponse = await rp(options);
  if (userDatabaseResponse.data.status === 'fail')
    return AppError('No such user', 500);
  return User(userDatabaseResponse);
}

async function putUserInDatabase(userToBePutIn) {}

exports.loginUser = catchAsync(async (req, res, next) => {
  const { id, password } = req.body;
  if (!id || !password) next(new AppError('No email or password defined'), 400);
  const userLoginRequest = LoginUser(id, password);
  const userFromDatabase = await getUserFromDatabase(userLoginRequest.id);
  if (userFromDatabase instanceof AppError) next(userFromDatabase);
});

exports.registerUser = catchAsync(async (req, res, next) => {
  const userToBeRegistered = RegisterUser(req.body.data);
  userToBeRegistered.password = await bcrypt.hash(userToBeRegistered.password);
  const newUser = await putUserInDatabase(userToBeRegistered);

  res.status(201).json({
    status: 'success',
    data: {
      user: newUser,
    },
  });
});
