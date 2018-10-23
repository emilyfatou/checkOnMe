// Load Module Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var debug = require('debug')('check-on-me-api');
var mongoose = require('mongoose');
var validator = require('express-validator');
var config = require('./config');
var unless=require('express-unless');
var router = require('./routes');
var authenticate = require('./lib/authenticate');
var async = require('async');
//var flash = require('express-flash');

// Connect to Mongodb
mongoose.connect(config.MONGODB_URL);
// listen to connection event
mongoose.connection.on('connected', function mongodbConnectionListener() {
  debug('Mongodb Connected successfully');
});
// handle error event
mongoose.connection.on('error', function mongodbErrorListener() {
  debug('Connection to Mongodb Failed!!');

  // Try and Reconnect
  mongoose.connect(config.MONGODB_URL);

});

// Initialize app
var app = express();

//Authentication Middleware
app.use(authenticate().unless({
  path: ['/users/login', '/users/signup'],
}));

// Set Middleware
app.use(bodyParser.json());

  // This is Middleware is used to filter and search
//app.use(search());
 // Set Validator
app.use(validator());

// Set Routes
router(app);

  //set cors
  app.use(function(req,res,next){
  res.header("Access-Contol-Allow-Origin","*");
  res.header("Access-Contol-Allow-headers","origin, X-Requested-With,Content-Type,Accept,Authorization");
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});


  app.use(function notFoundHandler(req, res, next) {

    console.log("request is : " + req.url);
    res.json({
      error: true,
      message: ' not found',
      status: 404
    });
  });
 
// Listen to HTTP Port
app.listen(config.HTTP_PORT, function connectionListener() {
  debug('API Server running on port %s', config.HTTP_PORT);
});

module.exports = app;
