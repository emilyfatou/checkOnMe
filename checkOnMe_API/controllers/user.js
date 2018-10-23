// Load Module Dependencies
var events = require('events');
var debug = require('debug')('check-on-me-api');
var moment = require('moment');
var UserDal = require('../dal/user');
var ProfileDal = require('../dal/profile');
var CustomerDal = require('../dal/customer');
var AdminDal = require('../dal/admin');
var email = require("emailjs");
var bcrypt = require('bcrypt');
var config = require('../config')
/**
 * Create User
 *
 * 1. Validate Data
 * 2. Create User
 * 3. Create Profile
 * 4. Create UserType
 * 5. Response
 */

//create email adress

var emailServer = email.server.connect({
  user: "tamri.mesfin@gmail.com",
  password: "bib@1234",
  host: "smtp.gmail.com",
  ssl: true,
  port: 465
});

//create user
exports.createUser = function createUser(req, res, next) {
  debug('creating user');

  var workflow = new events.EventEmitter();
  var body = req.body;


  workflow.on('validateUser', function validateUser() {
    // Validate User Data
    req.checkBody('password', 'Password Invalid!')
      .notEmpty()
      .isLength(6).withMessage('passwor length must be at least 6');
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
      email: body.email,
      first_name: body.first_name,
      last_name: body.last_name,
      phone_number: body.phone_number,
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
          workflow.emit('respond', user, profile);
        });
      });
    };
  });
  workflow.on('respond', function respond(user, profile) {
    var emailBody = '<html><p>Dear ' + body.first_name + ' ' + body.last_name + ', </p><br/>' +

      '<p>Thank You for signning up for Check on me emergency messaging platform!</p>' +
      '<p> Here are your account details<p>' +
      '<p> email: ' + body.email + ',</p>' +
      '<p> password: ' + body.password + ' </p><br>' +
      '<p> Thanks,' +
      '<p> Tamiralech Mesfin' +
      '<p> Mobile:+251-921405957' +
      '<p> Email:checkonmeapp@gmail.com' +
      // '<br/>Check on me'+
      '<br/>Website: <a href="www.checkonme.com">www.checkonme.com</a></p></html>';
    emailServer.send({
      text: emailBody,
      from: "check on me <info@checkonme.com>",
      to: user.email,
      subject: "Welcome to Check on me",
      attachment: [
        { data: emailBody, alternative: true },
        // { path: "path/to/file.zip", type: "application/zip", name: "renamed.zip" }
      ]
    }, function (err, message) {
      console.log(err || message);
    });
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
  var query = { _id: req.params._id };

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
 * Get all Users
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
    message: 'Opeartin To Be Implemented!'
  });
};
exports.forgotPassword = function forgotPassword(req, res, next) {
  debug('Forgot Password');

  var workflow = new events.EventEmitter();
  var body = req.body;
  var user_id = req.params.userId;

  // check if the parameters are correct
  workflow.on('validate', function validateParameters() {
    // First check if the email is valid 
    if (!req.params.email) {
      res.status(400).json({ message: "Wrong email!!!" });
      return;
    }
    // check if the data is correct
    UserDal.get({ email: req.params.email }, function (err, user) {
      if (err) return next(err);
      if (!user || !user._id) {
        res.status(404).json({ 'message': 'unrecognized email!' });
        return;
      }

      bcrypt.hash(req.params.email + user.password, function hashPasswd(err, hash) {
        // reset password
        UserDal.update({ _id: user._id }, { password: user.password }, function (err, _user) {
          if (err) {

            return next(err);
          }
          // password change complete
          if (!user._id) {
            res.status(500).json({ 'message': 'error has occurred!' });
            return;
          } else {
            ProfileDal.get({ user: user._id }, function (err, profile) {
              workflow.emit('sendEmail', user, profile);
            })
          }
        });
      });


    });


  });
  // check if the password exists
  workflow.on('sendEmail', function checkPasswordExist(user, profile) {
    var emailBody = '<html><p>Hello there</p>' +

      '<p> This email is sent because you reqested for a password reset.Please use the token below to login.</p>' +
      '<p> <p><b>Password: checkonmenewresettoken<b></p>' +
      '<p> http://api.staging.etd.gebeya.io/checkonme/users/login' +
      '<p> <b>you need to change your password once you login.</b></p>' +
      '<br/><p><small>If you are not the one who sent this request please ignore this email</small></p>' +


      '<p> Tamiralech Mesfin' +
      '<p> Mobile: +251-921405957' +
      '<p/> email:checkonmeapp@gmail.com' +
      '<br/>Website:<a href="www.checkonmeapp.com">www.checkonmeapp.com</a></p></html>';

    emailServer.send({
      text: emailBody,
      from: "Check on me <info@checkonmeapp.com>",
      to: user.email, // + ' ' + profile.last_name + '<' + user.mail + '>',
      // cc: "else <else@your-email.com>",
      subject: "password reset request",
      attachment: [
        { data: emailBody, alternative: true },
        // { path: "path/to/file.zip", type: "application/zip", name: "renamed.zip" }
      ]
    }, function (err, message) {
      console.log(err || message);
      if (err) {
        res.status(500).json({ message: "Can not perform password reset,error has occured!" });
        return;
      }


      res.status(200).json({ message: "check your inbox for a new password" });
    });

  });

  workflow.emit('validate');
};