const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config({ path: './config.env' });
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const authController = require('./controllers/authController');
const categories = require('./utils/categories');

const app = express();
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

// Set security HTTP headers
app.use(helmet());

// Limit request from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api/', limiter);

// Body parser, reading data from body into rq.body
app.use(express.json({ limit: '10kb' }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS attacks
app.use(xss());

//Prevent parameter pollution
app.use(hpp());

// Serving static files
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log(req.url);
  console.log(req.body);
  next();
});

// ROUTES
app.use('/api/v1/user/login', authController.loginUser);
app.use('/api/v1/user/', userRoutes);
app.use('/api/v1/product', productRoutes);

app.get('/api/v1/category', (req, res, next) => {
  res.status(200).json({ status: 'success', data: categories });
});

// 404 Error not found handler
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global Error Handling
app.use(globalErrorHandler);

module.exports = app;
