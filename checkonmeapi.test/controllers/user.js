// Load Module Dependencies
var events = require('events');
var debug = require('debug')('check-on-me-api');
var moment = require('moment');
var UserDal = require('../dal/user');
var ProfileDal = require('../dal/profile');
var CustomerDal = require('../dal/customer');
var AdminDal = require('../dal/admin');


/**
 * Create User
 *
 * 1. Validate Data
 * 2. Create User
 * 3. Create Profile
 * 4. Create UserType
 * 5. Response
 */
exports.createUser = function createUser(req, res, next) {
  debug('creating user');

  var workflow = new events.EventEmitter();
  var body = req.body;


  workflow.on('validateUser', function validateUser() {
    // Validate User Data
    req.checkBody('password', 'Password Invalid!')
      .notEmpty()
      .isLength(6);
    req.checkBody('email', 'Email Invalid!')
      .notEmpty()
      .isEmail();
    req.checkBody('phone_number', 'phone number Invalid!')
      .notEmpty();
    req.checkBody('first_name', 'First Name is empty!')
      .notEmpty();
    req.checkBody('last_name', 'Last Name is Empty!')
      .notEmpty();
    req.checkBody('user_type', 'User Type is Invalid!')
      .notEmpty().withMessage('User Type is Empty')
      .isIn(['customer', 'admin']).withMessage('User Type should either be customer or admin');


    var validationErrors = req.validationErrors();

    if (validationErrors) {
      res.status(400);
      res.json(validationErrors);

    } else {
      workflow.emit('createUser');

    }


  });


  workflow.on('createUser', function createUser() {

    //var userID = Number(req.params.userID);
    // Create User
    UserDal.create({
      email: body.email,
      password: body.password,
      role: body.user_type,
      realm: body.realm ? body.realm : 'user'

    }, function callback(err, user) {
      if (err) {
        return next(err);
      }

      workflow.emit('createProfile', user);

    });


  });

  workflow.on('createProfile', function createProfile(user) {
    // Create Profile
    ProfileDal.create({
      user: user._id,
      first_name: body.first_name,
      last_name: body.last_name,
      phone_number: body.phone_number
    },
      function callback(err, profile) {
        if (err) {
          return next(err);
        }


        UserDal.update({ _id: user._id }, { profile: profile._id }, function callback2(err, user) {
          if (err) {
            return next(err);
          }

          workflow.emit('createUserType', user, profile);

        });


      });


  });


  workflow.on('createUserType', function createUserType(user, profile) {
    // Create User Type

    if (body.user_type === 'customer') {
      CustomerDal.create({
        profile: profile._id,
      }, function callback1(err, customer) {
        if (err) {
          return next(err);
        }
        ProfileDal.update({ _id: profile._id }, { $set: { customer: customer._id } }, function updateCb1(err, profile) {

          if (err) {
            return next(err);
          }
          workflow.emit('respond', user);
        });

      });

    } else if (body.user_type === 'admin') {
      AdminDal.create({
        profile: profile._id
      }, function callback2(err, admin) {
        if (err) {
          return next(err);
        }

        ProfileDal.update({ _id: profile._id }, { $set: { admin: admin._id } }, function updateCb2(err, profile) {
          if (err) {
            return next(err);
          }
          workflow.emit('respond', user);
        });
      });
    };
  });
  workflow.on('respond', function respond(user) {
    user = user.toJSON();

    delete user.password;

    res.status(201);
    res.json(user);

  });

  workflow.emit('validateUser');
};


/**
 * Get User
 */
exports.getUser = function getUser(req, res, next) {
  debug('getting a user');
  var query = { _id: req.params._Id };

  UserDal.get(query, function cb(err, user) {
    if (err) {
      return next(err);
    }
    // If user found return it
    if (user) {
      res.json(user);
    } else {
      res.status(404);
      res.json({
        error: true,
        message: 'user Not Found!',
        status: 404
      });

    }
  });

};


/**
 * Update User
 */
exports.updateUser = function updateUser(req, res, next) {
  debug('updating user:', req.params._id);

  var body = req.body;
  var query = { _id: req.params._id };

  UserDal.update(query, body, function cb(err, user) {
    if (err) {
      return next(err);
    }

    res.json(user);
  });
};


/**
 * Remove Users
 */
exports.removeUser = function removeUser(req, res, next) {
  debug('delete user:', req.params._id);

  var query = { _id: req.params._id };
  UserDal.delete(query, function deletecb(err, user) {
    if (err) {
      return next(err);
    }
    res.json(user || {});
  });
};


/**
 * Get Users
 */
exports.getUsers = function getUsers(req, res, next) {
  debug('get all users');

  UserDal.getCollection({}, function getUsers(err, users) {
    if (err) {
      return next(err);
    }
    res.json(users);
  });
};

exports.passwordChange = function passwordChange(req, res, next) {
  debug('updating password');

  var body = req.body;
  var workflow = new events.EventEmitter();

  workflow.on('validateInput', function validateInput() {
    req.checkBody('password', "invalid old_password")
      .notEmpty().withMessage('please enter old password')

    req.checkBody('new_password', "invalid new_password")
      .notEmpty().withMessage('new password is empty');

    var validationErrors = req.validationErrors();
    if (validationErrors) {
      res.json(validationErrors);
    } else {
      workflow.emit('validateUserId')
    }
  });

  workflow.on('validateUserId', function validateUserId() {
    var query = { _id: req.params._id };
    UserDal.get(query, function cb(err, user) {
      if (err) {
        return next(err);
      }
      if (!user._id) {
        res.status(404);
        res.json({ message: "user is not found" });
        return;
      }
      else {
        workflow.emit('checkPassword', user);
      }
    });

    // console.log(user.old_password);
  });
  workflow.on('checkPassword', function checkPassword(user) {
    user.checkPassword(body.password, function check(err, isOk) {
      if (err) {
        return next(err);
      }
      if (!isOk) {
        res.status(403);
        res.json({ message: "wrong password" });
        return;
      }
      else {
        workflow.emit('changePassword', user);
      }

    });
  });
  workflow.on('changePassword', function passwordChange(user) {
    user.password = req.body.new_password;
    user.save(function saveUser(err) {
      if (err) {
        return next(err);
      }
      workflow.emit('respond');
    });
    workflow.on('respond', function respond() {
      res.json({ message: "password changed Sucessfully" })
    });

  });
  workflow.emit('validateInput');
};

//pagination
exports.getByPagination = function getByPagination(req, res, next) {
  debug('pagination');

  //query all
  var query = {};

  //define page and limit per page
  var page = 1 * req.query.page;
  var limit = 1 * req.query.per_page;
  console.log(page);
  //define query options as page and limit
  var queryOpts = {
    page: page,
    limit: limit
  };
  UserDal.getCollectionByPagination(query, queryOpts, function getByPagination(err, doc) {
    console.log(queryOpts);
    if (err) {
      return next(err);
    }
    if (!doc) {
      res.status(404);
      res.json({ messge: 'request not found' });
    }
    res.json(doc);
  });
};


// no operation(noop) function
exports.noop = function noop(req, res, next) {
  res.json({
    message: 'To Implemented!'
  });
};
