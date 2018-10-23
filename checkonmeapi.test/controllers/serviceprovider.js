// Load Module Dependencies
var debug = require('debug')('check-on-me-api');
var ServiceProviderDal = require('../dal/serviceprovider');
var MessageDal = require('../dal/message');
var CustomerDal = require('../dal/customer');
var EventEmitter = require('events').EventEmitter;
/**
 * post serviceprovider
 */
exports.createServiceProvider = function createServiceProvider(req, res, next) {
  debug('creating serviceprovider');

  var workflow = new EventEmitter();
  var body = req.body;

  workflow.on('createServiceProvider', function createServiceProvider() {
    req.checkBody('name', 'name is empty').notEmpty();
    req.checkBody('phone_number', 'phone_number is empty')
      .notEmpty();
 
    var errs = req.validationErrors();
    if (errs) {
      res.status(404);
      res.json(errs);
    } else {
      workflow.emit('serviceprovider');
    }
  });
  workflow.on('serviceprovider', function serviceprovider() {
    ServiceProviderDal.create({
      name: body.name,
      phone_number: body.phone_number,
      messages:body.messages,
      customers_number:body.customers_number

    }, function createcb(err, serviceprovider) {
      if (err) { return next(err); }

      res.json(serviceprovider);
    });
  });
  workflow.emit('createServiceProvider');
};

/**
 * Get serviceprovider
 */
exports.getServiceProvider = function getServiceProvider(req, res, next) {
  debug('getting a service provider');

  var body = req.body;
  var query = { _id: req.params._id };

  ServiceProviderDal.get(query, function cb(err, serviceprovider) {
    if (err) {
      return next(err);
    }
    // If serviceprovider found return it
    if (serviceprovider) {
      res.json(serviceprovider);
    } else {
      res.status(404);
      res.json({
        error: true,
        message: 'serviceprovider Not Found!',
        status: 404
      });

    }
  });

};
