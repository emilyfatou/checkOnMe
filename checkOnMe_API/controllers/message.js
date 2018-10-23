// Load Module Dependencies
var debug = require('debug')('check-on-me-api');

var http = require('http');

var ProfileDal = require('../dal/profile');

var MessageDal = require('../dal/message');

var CustomerDal = require('../dal/customer');

var serviceproviderDal = require('../dal/serviceprovider');

var config = require('../config');

var events = require('events').EventEmitter;

var request = require('request');

var async = require('async');


//send message for contacts n service providers
exports.sendMessage = function sendMessage(req, res, next) {
  //console.log("send message")
  debug('sending a message');

  // var body = req.body;
  // async.waterfall([
  //   validateData,
  //   retriveData,
  //   sendMessage2
  // ], function (callback) {
  //   console.log("message sent");

  //   /// updating logs here
  //   updateLogs
  // })


  // function updateLogs(){
  //    // updating message logs here
  //        async.waterfall([
  //          retrieveFromProfile,
  //          retrieveToProfile,
  //          updateMessageLogs,
  //          ],function(){
  //            console.log("Messge logs updated");
  //          })
  // }
        
  //      function retrieveFromProfile(callback){
  //         ProfileDal.get({phone_number : body.from},function(err,data){
  //           callback(data);
  //       });
  //      }
  //      function retrieveToProfile(fromData,callback){
  //         ProfileDal.get({phone_number : body.to},function(err,data){
  //           callback(fromData,data);
  //       });
  //      }
  //      function updateMessageLogs(fromData,toData,callback){
  //           var updateData = {
  //             from : fromData,
  //             to : {emergency_contacts : toData},
  //             content : {message : body.messgae}
  //           };

  //           MessageDal.create(updateData,function(err,data){
  //               if(err){
  //                 console.log("Some error logging message");
  //               }else{
  //                 callback();
  //               }
  //           })
  //       }        
       
  

  // function validateData(callback) {
  //   req.checkBody('from', 'enter message sender');
  //   req.checkBody('to', 'enter message receiver contact').notEmpty();
  //   req.checkBody('message', 'write the message to be sent').notEmpty();
  //   var validationErrors = req.validationErrors();

  //   if (validationErrors) {
  //     res.status(400);
  //     res.json(validationErrors);

  //   } else {
  //     callback();
  //   }
  // }

  // function retriveData(callback) {
  //   var query = { 
  //     phone_number: body.from, 
  //   }

  //   ProfileDal.get(query, function done(err, profile) {
  //     var messageSent = false
  //     var emergencyArray = profile.emergency_contacts;
  //     emergencyArray.forEach(function(element) {
  //         console.log("body to is : " + body.to)
  //          if(element.phone_number === body.to){
  //            messageSent = true;
  //            console.log("Phone exists, about to send message....")
  //            callback(profile);
  //          }
  //     }, this);
  //     if(!messageSent){
  //       res.status(400);
  //       res.json({message : "Message not sent because phone is not registered"});
  //   };

  // })
  // }
  var body=req.body;

  //   function sendMessage2(profile, callback) {
  //     console.log("from send messeage")
      var _TOKEN = "TAMIRALECH";

      //Receiver number/emergency_contacts or 911
      var _RECEIVER = body.to;

      //message to be sent
      var _MESSAGE = body.message; //message to be sent

      console.log(req.body);

      request.post('http://sms.gebeya.poweredfox.com/gebeya_sms_gateway_api.php', { form: { AUTH: _TOKEN, RECEIVER: _RECEIVER, BODY: _MESSAGE } }, function (err, httpResponse, body) {
        console.log("MEssage sent")
        res.status(200);
        res.json({ message: 'message sent successfully' });
        //res.json({ 'message': body });

      });
    };
  
//}




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
  }

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
  }


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
      message: 'Operation To Be Implemented!'
    });
  };