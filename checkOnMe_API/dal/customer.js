// Access Layer for customer Data.

/**
 * Load Module Dependencies.
 */
var debug = require('debug')('check-on-me-api');
var moment = require('moment');

var Customer = require('../models/customer');

var population = [{
  
  path: 'profile'
},{
  path:'contacts'
},{
  path:'message'
},{
  path:'serviceprovider'
},{
  path:'user'
}];

/**
 * create a new customer.
 *
 * @desc  creates a new customer and saves them
 *        in the database
 *
 * @param {Object}  customerData  Data for the customer to create
 * @param {Function} cb       Callback for once saving is complete
 */
exports.create = function create(customerData, cb) {
  debug('creating a new customer');

  // Create customer
  var customerModel = new Customer(customerData);

  customerModel.save(function saveCustomer(err, data) {
    if (err) {
      return cb(err);
    }


    exports.get({ _id: data._id }, function (err, customer) {
      if (err) {
        return cb(err);
      }

      cb(null, customer);

    });

  });

};

/**
 * delete a customer
 *
 * @desc  delete data of the customer with the given
 *        id
 *
 * @param {Object}  query   Query Object
 * @param {Function} cb Callback for once delete is complete
 */
exports.delete = function deleteItem(query, cb) {
  debug('deleting customer: ', query);

  Customer
    .findOne(query)
    .populate(population)
    .exec(function deleteCustomer(err, customer) {
      if (err) {
        return cb(err);
      }

      if (!customer) {
        return cb(null, {});
      }

      customer.remove(function (err) {
        if (err) {
          return cb(err);
        }

        cb(null, customer);

      });

    });
};

/**
 * update a customer
 *
 * @desc  update data of the customer with the given
 *        id
 *
 * @param {Object} query Query object
 * @param {Object} updates  Update data
 * @param {Function} cb Callback for once update is complete
 */
exports.update = function update(query, updates, cb) {
  debug('updating customer: ', query);

  Customer
    .findOneAndUpdate(query, updates)
    .populate(population)
    .exec(function updateCustomer(err, customer) {
      if (err) {
        return cb(err);
      }

      cb(null, customer || {});
    });
};

/**
 * get a customer.
 *
 * @desc get a customer with the given id from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.get = function get(query, cb) {
  debug('getting customer ', query);

  Customer
    .findOne(query)
    .populate(population)
    .exec(function (err, customer) {
      if (err) {
        return cb(err);
      }

      cb(null, customer || {});
    });
};

/**
 * get a collection of customers
 *
 * @desc get a collection of customers from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.getCollection = function getCollection(query, cb) {
  debug('fetching a collection of customers');

  Customer.find(query)
    .populate(population)
    .exec(function getCustomersCollection(err, customers) {
      if (err) {
        return cb(err);
      }

      return cb(null, customers);
    });

};
//pagination
exports.getCollectionByPagination = function getCollectionByPagination(query, queryOpts, cb) {

  var opts = {
    populate: population,
    page: queryOpts.page,
    limit: queryOpts.limit
  };
  Customer.paginate(query, opts, function (err, result) {
    if (err) {
      return cb(err);
    }
    return cb(null, result);
  });
};
