// Access Layer for message Data.

/**
 * Load Module Dependencies.
 */
var config = require('../config');
 var debug = require('debug')('check-on-me-api');
var moment = require('moment');

var Message = require('../models/message');

var population = [{
  path: 'customer',
},{
 
  path:'serviceprovider'
}];

/**
 * create a new message.
 *
 * @desc  creates a new message and saves them
 *        in the database
 *
 * @param {Object}  messageData  Data for the message to create
 * @param {Function} cb       Callback for once saving is complete
 */
exports.create = function create(messageData, cb) {
  debug('creating a new message');

  // Create message
  var messageModel = new Message(messageData);

  messageModel.save(function saveMessage(err, data) {
    if (err) {
      return cb(err);
    }
    exports.get({ _id: data._id }, function (err, message) {
       if (err) {
        return cb(err);
      }

      cb(null, message);

    });
   });

};

/**
 * delete a message
 *
 * @desc  delete data of the message with the given
 *        id
 *
 * @param {Object}  query   Query Object
 * @param {Function} cb Callback for once delete is complete
 */
exports.delete = function deleteItem(query, cb) {
  debug('deleting message: ', query);

  Message
    .findOne(query)
    .populate(population)
    .exec(function deleteMessage(err, message) {
      if (err) {
        return cb(err);
      }

      if (!message) {
        return cb(null, {});
      }

      Message.remove(function (err) {
        if (err) {
          return cb(err);
        }

        cb(null, message);

      });

    });
};
 
/**
 * get a message.
 *
 * @desc get a message with the given id from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.get = function get(query, cb) {
  debug('getting message:', query);

  Message
    .findOne(query)
    .populate(population)
    .exec(function (err, message) {
      if (err) {
        return cb(err);
      }

      cb(null, message || {});
    });
};

/**
 * get a collection of messages
 *
 * @desc get a collection of messages from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.getCollection = function getCollection(query, cb) {
  debug('fetching a collection of messages');

  Message.find(query)
    .populate(population)
    .exec(function getMessagesCollection(err, Messages) {
      if (err) {
        return cb(err);
      }

      return cb(null, Messages);
    });
};

//pagination
exports.getCollectionByPagination = function getCollectionByPagination(query, queryOpts, cb) {

  var opts = {
    populate: population,
    page: queryOpts.page,
    limit: queryOpts.limit
  };
  Message.paginate(query, opts, function (err, result) {
    if (err) {
      return cb(err);
    }
    return cb(null, result);
  });
};
//pagination
exports.getCollectionByPagination = function getCollectionByPagination(query, queryOpts, cb) {

  var opts = {
    populate: population,
    page: queryOpts.page,
    limit: queryOpts.limit
  };
  Message.paginate(query, opts, function (err, result) {
    if (err) {
      return cb(err);
    }
    return cb(null, result);
  });
};