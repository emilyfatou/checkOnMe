// Access Layer for serviceprovider Data.

/**
 * Load Module Dependencies.
 */
var debug = require('debug')('check-on-me-api');
var moment = require('moment');

var ServiceProvider = require('../models/serviceprovider');

var population = [{
  path: 'customer'
}, {
  path: 'message'
}];

/**
 * create a new serviceprovider.
 *
 * @desc  creates a new serviceprovider and saves them
 *        in the database
 *
 * @param {Object}  serviceproviderData  Data for the serviceprovider to create
 * @param {Function} cb       Callback for once saving is complete
 */
exports.create = function create(serviceproviderData, cb) {
  debug('creating a new serviceprovider');

  // Create serviceprovider
  var serviceproviderModel = new ServiceProvider(serviceproviderData);

  serviceproviderModel.save(function saveServiceProvider(err, data) {
    if (err) {
      return cb(err);
    }


    exports.get({ _id: data._id }, function (err, serviceprovider) {
      if (err) {
        return cb(err);
      }

      cb(null, serviceprovider);

    });

  });

};

 
/**
 * update a serviceprovider
 *
 * @desc  update data of the serviceprovider with the given
 *        id
 *
 * @param {Object} query Query object
 * @param {Object} updates  Update data
 * @param {Function} cb Callback for once update is complete
 */
exports.update = function update(query, updates, cb) {
  debug('updating serviceprovider: ', query);

  var now = moment().toISOString();

  updates.last_modified = now;

  ServiceProvider
    .findOneAndUpdate(query, updates)
    .populate(population)
    .exec(function updateServiceProvider(err, serviceprovider) {
      if (err) {
        return cb(err);
      }

      cb(null, serviceprovider || {});
    });
};

/**
 * get a serviceprovider.
 *
 * @desc get a serviceprovider with the given id from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.get = function get(query, cb) {
  debug('getting serviceprovider ', query);

  ServiceProvider
    .findOne(query)
    .populate(population)
    .exec(function (err, serviceprovider) {
      if (err) {
        return cb(err);
      }
      cb(null, serviceprovider || {});
    });
};


/**
 * get a collection of serviceproviders
 *
 * @desc get a collection of serviceproviders from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.getCollection = function getCollection(query, cb) {
  debug('fetching a collection of serviceproviders');

  ServiceProvider.find(query)
    .populate(population)
    .exec(function getServiceProvidersCollection(err, serviceproviders) {
      if (err) {
        return cb(err);
      }

      return cb(null, serviceproviders);
    });

};
