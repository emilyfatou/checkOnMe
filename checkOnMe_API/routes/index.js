// Load Module Dependencies
var express = require('express');
var userRouter = require('./user');
var customerRouter = require('./customer');
var adminRouter = require('./admin');
var profileRouter = require('./profile');
var serviceproviderRouter = require('./serviceprovider');
var messageRouter = require('./message');

// Export Router Initializater
module.exports = function initRouter(app) {

  // Users Endpoint
  app.use('/users', userRouter);

  // Customers Endpoint
  app.use('/customers', customerRouter);

  // Admins Endpoint
  app.use('/admins', adminRouter);

  // Profiles Endpoint
  app.use('/profiles', profileRouter);
  

  //messages Endpoints
  app.use('/messages', messageRouter);

  //serviceproviders Endpoints
  app.use('/serviceproviders', serviceproviderRouter);
};
