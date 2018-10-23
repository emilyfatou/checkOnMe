// Load Module Dependencies
var express = require('express');
var userRouter    = require('./user');
var customerRouter  = require('./customer');
var adminRouter   = require('./admin');
var contactRouter = require('./contact');
var profileRouter = require('./profile');
var serviceproviderRouter=require('./serviceprovider');
var messageRouter=require('./message');

// Export Router Initializater
module.exports = function initRouter(app) {

  // Users Endpoint
  app.use('/users', userRouter);
  // Client Endpoint
  app.use('/customers', customerRouter);
  // Talent Endpoint
  app.use('/admins', adminRouter);
  // Profile Endpoint
  app.use('/profiles', profileRouter);
  // Project Endpoint
  app.use('/contacts', contactRouter);
//message Endpoints
 app.use('/messages', messageRouter);
//serviceproviders Endpoints
 app.use('/serviceproviders', serviceproviderRouter);
};
