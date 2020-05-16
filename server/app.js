const express = require('express');
const userRoutes = require('./routes/productRoutes');
const productRoutes = require('./routes/productRoutes');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

module.exports = app;

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/product', productRoutes);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
