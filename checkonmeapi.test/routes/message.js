// Load Module Dependencies
var express = require('express');
var message = require('../controllers/message');
// var auth  = require('../controllers/auth');
// var authorize = require('../lib/authorize');

// Create a Router
var router = express.Router();

 /** @api {post} /messages/create create emergency message
 * @apiName createMessage
 * @apiGroup Messages 
 * 
 * @apiParam {String} message the message body to be sent
 * @apiParam {String} location location of the customer
 * 
 *  @apiParamExample Request Example:
 *   {
 *  "message":"this is a test emergency message",
 *  "location":"addis ababa",
*     } 
 * 
 * @apiSuccess {String} _id Unique message ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} date_created Date Created
 * @apiSuccess {String} status status of the message sent,pending or delivered
 * @apiSuccess {String} content the content of the message message body,location
 * @apiParam {String} message the message body to be sent
 * @apiParam {String} location location of the customer
 * 
 * @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK
 *{
  "_id": "59007da5eb0e663393eec443",
  "updated_at": "2017-04-26T10:59:49.447Z",
  "created_at": "2017-04-26T10:59:49.447Z",
  "__v": 0,
  "status": "sent",
  "content": {
    "message": "this is an emergency message",
    "location": "addis ababa"
  }
}
*/
router.post('/create',message.createMessage);

/**
 * @api {get} /messages/paginate get messages by pagination
 * @apiName getByPagination
 * @apiGroup Messages
 * 
 *  @apiParamExample Request Example:
 * localhost:8001/messages/paginate?page=1&per_page=3
 * 
 * @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK
 * 
 * {
      "_id": "59007da5eb0e663393eec443",
      "updated_at": "2017-04-26T10:59:49.447Z",
      "created_at": "2017-04-26T10:59:49.447Z",
      "__v": 0,
      "status": "sent",
      "content": {
        "message": "this is an emergency message",
        "location": "addis ababa"
      }
    },
    {
      "_id": "59007ee35f620e347a064ca2",
      "updated_at": "2017-04-26T11:05:07.484Z",
      "created_at": "2017-04-26T11:05:07.484Z",
      "__v": 0,
      "status": "sent",
      "content": {
        "message": "this is a request for an emergency service,there is a fire accident.....",
        "location": "adama"
      }
    },
    {
      "_id": "59007f0f5f620e347a064ca3",
      "updated_at": "2017-04-26T11:05:51.311Z",
      "created_at": "2017-04-26T11:05:51.311Z",
      "__v": 0,
      "status": "sent",
      "content": {
        "message": "this is a emmy emergency message,you do not need to continue reading.....",
        "location": "hawassa"
      }
    }
  ],
  "total": 13,
  "limit": 3,
  "page": 1,
  "pages": 1
}
 */
 router.get('/paginate', message.getByPagination);

 /** @api {post} /messages/send send an emergency message
 * @apiName sendMessage
 * @apiGroup Messages 
 * 
 * @apiParam {String} message the message body to be sent
 * @apiParam {String} to the reciver of the message contacts or 911
 * @apiParam {String} from the sender of the message customer phone number
 * 
 * @apiParamExample Request Example:
 * {
 *  "message":"this is an emergency message",
 * "to":"+14042815465",
 *  "from":"+17187104108 "
 *  }
 * 
 */
router.post('/send', message.sendMessage);

/**
 * @api {get} /messages/:_id get a specific message by id
 * @apiName getMessage
 * @apiGroup Messages 
 * 
 * @apiParam {String} id the uique message id
 * 
 * @apiParamExample Request Example:
 * localhost:8001/messages/59007da5eb0e663393eec443 
 * 
 * @apiSuccess {String} _id Unique message ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} date_created Date Created
 * @apiSuccess {String} status status of the message sent,pending or delivered
 * @apiSuccess {String} content the content of the message message body,location
 * @apiSuccess {String} message the body of the message
 * @apiSuccess {String} location location of the customer
 * 
 * @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK
 * 
{
  "_id": "59007da5eb0e663393eec443",
  "updated_at": "2017-04-26T10:59:49.447Z",
  "created_at": "2017-04-26T10:59:49.447Z",
  "__v": 0,
  "status": "sent",
  "content": {
    "message": "this is an emergency message",
    "location": "addis ababa"
  }
}
*/
router.get('/:_id', message.getMessage);
 /**
 *@api {delete} /messages/:_id  delete a specific message by id
 * @apiName removeMessage
 * @apiGroup Messages
 * 
 * @apiParam {String} _id Unique message ID
 * @apiParam {String} updated_at Last Modified Date
 * @apiParam {String} date_created Date Created
 * @apiParam {String} status status of the message sent,pending or delivered
 * @apiParam {String} content the content of the message message body,location
 * @apiParam {String} emergency_type the type of emergency medical or others
 * @apiParam {String} to message recivers service provider or contacts
 * 
 * @apiParamExample Request Example:
 * 
* {
  "_id": "58db2ab967abfd211de19e10",
  "updated_at": "2017-03-29T03:32:09.522Z",
  "created_at": "2017-03-29T03:32:09.522Z",
  "__v": 0,
  "status": "sent",
  "content": {
    "message": "this is an emergency message",
    "location": "addis ababa",
    "emergency_type": "others"
  },
  "to": {
    "serviceProviders": [],
    "contacts": []
  }
} * 
 * @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK
 * {}
 */
router.delete('/:_id', message.removeMessage);

/** @api {get} /messages/  get all emergency messages
 * @apiName getMessages
 * @apiGroup Messages
 * 
 *  @apiParamExample Request Example:
 * localhost:8001/messages/
 * 
 * @apiSuccess {String} _id Unique message ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} date_created Date Created
 * @apiSuccess {String} status status of the message sent,pending or delivered
 * @apiSuccess {String} content the content of the message message body,location
 * @apiSuccess {String} message the body of emergency emergency message
 * @apiSuccess {String} location location of the customer
 * 
 * @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK
 * [
 *    {
    "_id": "59007da5eb0e663393eec443",
    "updated_at": "2017-04-26T10:59:49.447Z",
    "created_at": "2017-04-26T10:59:49.447Z",
    "__v": 0,
    "status": "sent",
    "content": {
      "message": "this is an emergency message",
      "location": "addis ababa"
    }
  },
  {
    "_id": "59007ee35f620e347a064ca2",
    "updated_at": "2017-04-26T11:05:07.484Z",
    "created_at": "2017-04-26T11:05:07.484Z",
    "__v": 0,
    "status": "sent",
    "content": {
      "message": "this is a request for an emergency service,there is a fire accident.....",
      "location": "adama"
    }
  },
  {
    "_id": "59007f0f5f620e347a064ca3",
    "updated_at": "2017-04-26T11:05:51.311Z",
    "created_at": "2017-04-26T11:05:51.311Z",
    "__v": 0,
    "status": "sent",
    "content": {
      "message": "this is a emmy emergency message,you do not need to continue reading.....",
      "location": "hawassa"
    }
  }
]
 */
router.get('/', message.getMessages);

// Export Router
module.exports = router;
