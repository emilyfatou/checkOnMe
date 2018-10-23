// Load Module Dependencies
var CustomerDal = require('../dal/customer');
var debug = require('debug')('check-on-me-api');

/**
 * Get all customers
 */
exports.getCustomers = function getCustomers(req, res, next) {
  debug('get a collection of customers');

  CustomerDal.getCollection({}, function getCustomers(err, customers) {
    if (err) {
      return next(err);
    }
    res.status(200);
    res.json(customers)
  });
};
//pagination
exports.getByPagination = function getByPagination(req, res, next) {
  debug('pagination');

//query all
  var query = {};

  //define page and limit per page
  var page = 1*req.query.page;
  var limit = 1*req.query.per_page;
console.log(page);
  //define query options as page and limit
  var queryOpts = {
    page: page,
    limit: limit
  };
  CustomerDal.getCollectionByPagination(query, queryOpts, function getByPagination(err,doc){
    console.log(queryOpts);
    if(err){
      return next(err);
    }
    if(!doc){
      res.status(404);
      res.json({messge:'request not found'});
    }
    res.json(doc);
  });
};