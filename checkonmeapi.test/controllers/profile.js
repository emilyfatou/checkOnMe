// Load Module Dependencies
var ProfileDal = require('../dal/profile');
var debug = require('debug')('profile controllers');
/**
 * Get Profile
 */
exports.getProfile = function getProfile(req, res, next) {
  debug('get profile');
  var query = { _id: req.params._id };
  ProfileDal.get(query, function cb(err, profile) {
    if (err) {
      return next(err);
    }
    if (profile) {
      res.json(profile);
    }
    else if (!profile) {
      res.status(404);
      res.json({
        message: 'user profile not found'
      });
    }
  });
};


/**
 * Update Profile
 */
exports.updateProfile = function updateProfile(req, res, next) {
  debug('updating profile');

  var body = req.body;
  var query = { _id: req.params._id };
  ProfileDal.update(query, body, function cb(err, profile) {
    if (err) {
      return next(err);
    }
    if (!profile._id) {
      res.json(404);
      res.json({
        error: 404,
        message: "Profile to be update is not found",
        status: 404
      });
    } else {
      res.json(profile);
    }
  });
};
 
 /**
 * Get all Users profile
 */
exports.getProfiles = function getProfiles(req, res, next) {
  debug('get all profiles');

  ProfileDal.getCollection({}, function getProfiles(err, profiles) {
    if (err) {
      return next(err);
    }
    res.json(profiles);
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
  ProfileDal.getCollectionByPagination(query, queryOpts, function getByPagination(err,doc){
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