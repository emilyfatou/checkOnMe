// Load Module Dependencies
var events = require('events');
var crypto = require('crypto');


 var bcrypt = require('bcrypt');

var debug = require('debug')('check-on-me-api');
var moment = require('moment');

var config = require('../config');

var UserDal = require('../dal/user');
var TokenDal = require('../dal/token');
var ProfileDal = require('../dal/profile');


// Login Controller
exports.login = function login(req, res, next) {
  debug('Login User');

  var workflow = new events.EventEmitter();
  var body = req.body;

  workflow.on('validateData', function validateData() {
    req.checkBody('email', 'email is empty!')
      .notEmpty();
    req.checkBody('password', 'Password is empty!');
      //.notEmpty();
    var errs = req.validationErrors();
    if (errs) {
      res.status(400);
      res.json(errs);
      return;
    }

    workflow.emit('validateEmail');

  });

  workflow.on('validateEmail', function validateEmail() {
    // Check Username
    UserDal.get({ email: req.body.email }, function done(err, user) {
      if (err) {
        return next(err);
      }

      if (!user._id) {
        res.status(404);
        res.json({
          message: 'not recognized!'
        });
        return;
      }
      workflow.emit('validatePassword', user);
    });
  });

  workflow.on('validatePassword', function validatePassword(user) {

    

    // Check Password
    user.checkPassword(req.body.password, function done(err, isOk) {
      if (err) {
        return next(err);
      }

      if (!isOk) {
         res.status(403);
        res.json({
          message: 'Wrong Credentials!'
        });
        return;
      }

      workflow.emit('generateToken', user);
    });
  });

  workflow.on('generateToken', function generateToken(user) {

    //get if token exists
    TokenDal.get({ user: user._id }, function done(err, token) {
      if (err) {
        return next(err);
      }

      crypto.randomBytes(config.TOKEN_LENGTH, function tokenGenerator(err, buf) {
        if (err) {
          return next(err);
        }

        var tokenValue = buf.toString('base64');

        // Generate a new token
        if (!token._id) {
          TokenDal.create({ user: user._id, value: tokenValue, revoked: false }, function createToken(err, token) {
            if (err) {
              return next(err);
            }

            workflow.emit('respond', user, tokenValue);
          });

        } else {
          //  if token value exists Update token
          TokenDal.update({ _id: token._id },
            { $set: { value: tokenValue, revoked: false } },
            function updateToken(err, token) {
              if (err) {
                return next(err);
              }

              workflow.emit('respond', user, tokenValue);

            });
        }
      });

    });

  });
  workflow.on('respond', function respond(user, token) {

    var now = moment().toISOString();

    UserDal.update({ _id: user._id }, { last_login: now },
      function updateLogin(err, user) {

        if (err) {
          return next(err);
        }

        user = user.toJSON();

        delete user.password;

        res.json({
          token: token,
          user: user
        });
      });
  });
  workflow.emit('validateData');
};

// Logout controller
exports.logout = function (req, res, next) {
  debug('User Logout');

  // fetch the user id from req object, which is appended on the authenticate middleware
   var userId = req.params._id;
  if (!userId) {
    // respond error to the request
    res.status(401);
    res.json({
      message: 'user is not logged in'
    });return;
  }
  /*update token to revoked or expire session
  *set last modified to now
   */
  //update token
   TokenDal.update({ user: userId }, { $set: { revoked: true } }, function updateCallback(err, token) {
    if (err) {
      return next(err);
    }
    res.status(201);
    res.json({
      message: 'user Loggedout successfully'
    });
  });
}
 
//password change
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

  //check if the user exists
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

  });

  //check old password
  workflow.on('checkPassword', function checkPassword(user) {
    user.checkPassword(body.password || body.defaultPassword, function check(err, isOk) {
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
  //change password
  workflow.on('changePassword', function passwordChange(user) {
    user.password = req.body.new_password;
    user.save(function saveUser(err) {
      if (err) {
        return next(err);
      }
      workflow.emit('respond');
    });
    workflow.on('respond', function respond() {
      //res.json(201);
      res.json({ message: "password changed Sucessfully" })
    });

  });
  workflow.emit('validateInput');
};