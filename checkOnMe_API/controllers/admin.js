// Load Module Dependencies
var AdminDal  = require('../dal/admin');
var debug=require('debug')('check-on-api');

/**
 * Get all admin users
 */
exports.getAdmins = function getAdmins(req, res, next) {
   AdminDal.getCollection({}, function getAdmins(err, admins) {
    if (err) {
      return next(err);
    }
    res.json(admins);
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
  AdminDal.getCollectionByPagination(query, queryOpts, function getByPagination(err,doc){
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