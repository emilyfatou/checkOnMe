// Load Module Dependencies
var debug = require('debug')('check-on-me-api');
//require twilio for messaging
var twilio = require('twilio');

var ProfileDal = require('../dal/profile');

var MessageDal = require('../dal/message');

var CustomerDal = require('../dal/customer');

var serviceproviderDal = require('../dal/serviceprovider');

var ContactDal = require('../dal/contact');

var config = require('../config');

var EventEmitter = require('events').EventEmitter;

//initializing the twilio clients
var twilioClient = twilio(config.TWILIO.ACCOUNT_SID, config.TWILIO.AUTH_TOKEN);



//create messsage 
exports.createMessage = function createMessage(req, res, next) {
  debug('creating a message');

  var workflow = new EventEmitter();
  var body = req.body;
  workflow.on('createNewMessage', function createNewMessage() {

    req.checkBody('message', 'message is empty').notEmpty();
    req.checkBody('location', 'location is empty').notEmpty();

    var errs = req.validationErrors();
    if (errs) {

      res.status(404);
      res.json(errs);
    } else {
      workflow.emit('Message');
    }
  });
  workflow.on('Message', function Message() {
    console.log('on message event');
    MessageDal.create({
      content: {
        message: body.message,
        location: body.location
      }
    },
      function createcb(err, message) {
        if (err) {
          return next(err);
        }
        res.json(message);
      });
  });

  workflow.emit('createNewMessage');
};

//send message for contacts n service providers
exports.sendMessage = function sendMessage(req, res, next) {
  debug('sending a message');
  console.log(req.body);
  twilioClient.sendMessage({
    to: req.body.to,
    from: req.body.from,
    body: req.body.message
  },

    //check the connection to twilio n get response data
    function cb(err, responseData) {
      if (err) {
        res.status(500)
        res.json(err);
        return;
      }
      ProfileDal.get({ phone_number: body.phone_number }, function done(err, profile) {
        if (err) {
          return next(err);
        }
        if (from === phone_number)
          MessageDal.update({ id: message._id }, { from: body.phone_number }, function updatePhone(err, message) {
            if (err) {
              return next(err);
            } else {
              ContactDal.get({ phone_number: body.phone_number }, function done(err, contact) {
                if(err){
                  return next(err);
                }
                MessageDal.update({ id: message._id }, { to: body.phone_number }, function updatePhone(err, message) {
                  if (err) {
                    return next(err);
                  }
                  res.json({
                    message: 'message sent successfully'
                  });
                });
                });
            }
          });
      });

    });
};

/**
 * Get message
 */
exports.getMessage = function getMessage(req, res, next) {
  MessageDal.get({ _id: req.params._id }, function getMessage(err, message) {
    if (err) {
      return next(err);
    }
    res.json(message);
  });
};

/**
 * Get messages
 */
exports.getMessages = function getMessages(req, res, next) {
  debug('getting collection of message');

  MessageDal.getCollection({}, function getMessages(err, messages) {
    if (err) {
      return next(err);
    }
    res.json(messages);
  });
};


//removing message by id
exports.removeMessage = function removeMessage(req, res, next) {
  debug('deleting a message:', req.params._id);

  var query = { _id: req.params._id }
  MessageDal.delete(query, function deletecb(err, message) {
    if (err) {
      res.next(err);
    }
    res.json(message);
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
  MessageDal.getCollectionByPagination(query, queryOpts, function getByPagination(err, doc) {
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
