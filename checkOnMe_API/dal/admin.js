//load module dependencies
var Admin = require('../models/admin');

var population = [{
  path: 'profile'
}];

//create admin
exports.create = function create(adminData, cb) {

  var adminModel = new Admin(adminData);
  adminModel.save(function saveadmin(err, data) {
    if (err) {
      return cb(err);
    }
    exports.get({ _id: data._id }, function (err, admin) {
      if (err) {
        return cb(err);
      }
      cb(null, admin);
    });
  });
};

//get a admin
exports.get = function get(query, cb) {
  Admin.findOne(query).populate(population).exec(function (err, admin) {
    if (err) {
      return cb(err);
    }
    cb(null, admin || {});
  });
};

//get all admins
exports.getCollection = function getCollection(query, cb) {
  Admin.find(query).populate(population).exec(function getCollection(err, admins) {
    if (err) {
      return cb(err);
    }
    cb(null, admins || {});
  });
};

//update a admin
exports.update = function update(query, updates, cb) {
  Admin.findOneAndUpdate(query, updates).populate(population).exec(function updatecb(err, admin) {
    if (err) {
      return cb(err);
    }
    cb(null, admin || {});
  });
};

//delete admin
exports.delete = function deleteItem(query, cb) {
  Admin.findOne(query).populate(population).exec(function (err, admin) {
    if (err) {
      return cb(err);
    }
    if (!admin) {
      return cb(null, {});
    }
    Admin.remove(function (err) {
      if (err) {
        return cb(err);
      }
      cb(null, admin);
    });
  });
};
//pagination
exports.getCollectionByPagination = function getCollectionByPagination(query, queryOpts, cb) {

  var opts = {
    populate: population,
    page: queryOpts.page,
    limit: queryOpts.limit
  };
  Admin.paginate(query, opts, function (err, result) {
    if (err) {
      return cb(err);
    }
    return cb(null, result);
  });
};