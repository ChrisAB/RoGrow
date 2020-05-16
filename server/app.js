const express = require('express');
const userRoutes = require('./routes/productRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

module.exports = app;

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/product', productRoutes);

app.all('*', (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  err.status = 'fail';
  err.statusCode = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.log(err.stack);

  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});
