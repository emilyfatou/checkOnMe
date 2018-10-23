// Load Module Dependencies
var express = require('express');

var contact = require('../controllers/contact');
  
// Create a Router
var router = express.Router();

/**
 * @api {post} /contacts/ Crate New Contact
 * @apiName CreateContact
 * @apiGroup Contacts
 *
 * @apiParam {String} name  name of the contact.
 * @apiParam {String} phone_number  phone number of the contact.
 * 
 * @apiParamExample {json} Request-Example:
 *   {
 *	"name":"jane doe",
 *	"phone_number":"0921405957",
*    }
 *
 * @apiSuccess {String} _id Unique contact ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {String} name name of the contact.
 * @apiSuccess {String} phone_number  phone number of the contact
 
 * 
 * @apiSuccessExample Response Example:
 *    HTTP/1.1 200 OK
 *{
  "_id": "58db2a3505cbfa20dd08f49d",
  "updated_at": "2017-03-29T03:29:57.752Z",
  "created_at": "2017-03-29T03:29:57.752Z",
  "name": "jessy ",
  "phone_number": "+25110101213",
  "__v": 0
}
 */
router.post('/', contact.createContact);

 /** @api {get} /contacts/paginate paginate contacts records
 * @apiName getByPagination
 * @apiGroup Contacts
 * 
 *  @apiParamExample Request Example:
 * 
 * localhost:8001/contacts/paginate?page=1&per_page=2
 * 
 * @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK
 *{
  "docs": [
    {
      "_id": "58db28cb7f10171fff0b666a",
      "updated_at": "2017-03-29T03:23:55.522Z",
      "created_at": "2017-03-29T03:23:55.522Z",
      "name": "winie ",
      "phone_number": "0921405957",
      "__v": 0
    },
    {
      "_id": "58db28d07f10171fff0b666b",
      "updated_at": "2017-03-29T03:24:00.094Z",
      "created_at": "2017-03-29T03:24:00.094Z",
      "name": "winie ",
      "phone_number": "0921405957",
      "__v": 0
    }
  ],
  "total": 8,
  "limit": 2,
  "page": 1,
  "pages": 4
}}
 */ 

router.get('/paginate', contact.getByPagination);



/**
 * @api {get} /contacts/:id Request information of a specific contact
 * @apiName GetContact
 * @apiGroup Contacts
 * 
 * @apiSuccess {String} _id Unique contact ID
 * @apiSuccess {String} name name of the contact.
 * @apiSuccess {String} phone_number  phone number of the contact.
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * 
 * @apiSuccessExample {json} Success-Response:
*     HTTP/1.1 200 OK
* {
  "_id": "58db2a3505cbfa20dd08f49d",
  "updated_at": "2017-03-29T03:29:57.752Z",
  "created_at": "2017-03-29T03:29:57.752Z",
  "name": "jessy ",
  "phone_number": "+25110101213",
  "__v": 0
}
 */
router.get('/:_Id', contact.getContact);
/**
 * @api {put} /contacts/:id update Contact information by id
 * @apiName PutContact
 * @apiGroup Contacts  
 * 
 *@apiParam {object} data  update Contacts data

 * @apiParamExample {json} Request-Example:
 *  {
 *  "name":"winie",
 *  "phone_number":"0921405957"
 *   }
 * 
 * @apiSuccess {String} _id Unique User ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {String} name name of the contact.
 * @apiSuccess {String} phone_number  phone number of the contact.
 * 
 * @apiSuccessExample Response Example
 *    HTTP/1.1 200 OK
 *   {
    "_id": "58db28cb7f10171fff0b666a",
    "updated_at": "2017-03-29T03:23:55.522Z",
    "created_at": "2017-03-29T03:23:55.522Z",
    "name": "winie ",
    "phone_number": "0921405957",
    "__v": 0
  }
*/
router.put('/:_id', contact.updateContact);

/**
 * @api {delete} /contacts/:id remove a specific contact information
 * @apiName DeleteContact
 * @apiGroup Contacts
 * 
 * @apiParam {String} _id Unique contact ID
 * @apiParam {String} updated_at Last Modified Date
 * @apiParam {String} created_at Date Created
 * @apiParam {String} name name of the contact.
 
 * 
 * @apiParamExample {json} Request-Example:
 *    HTTP/1.1 200 OK
 *  {
    "_id": "58db28cb7f10171fff0b666a",
    "updated_at": "2017-03-29T03:23:55.522Z",
    "created_at": "2017-03-29T03:23:55.522Z",
    "name": "winie ",
    "phone_number": "0921405957",
    "__v": 0
  }
 * 
 *  @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {}
 */
router.delete('/:_id', contact.removeContact);

/**
 * @api {get} /contacts/ Request information of all Contacts
 * @apiName GetContacts
 * @apiGroup Contacts
 * 
 * @apiSuccess {String} _id Unique User ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {String} name  name of the contact.
 * @apiSuccess {String} phone_number  phone number of the contact.
 
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
*[
  [
  {
    "_id": "58db28cb7f10171fff0b666a",
    "updated_at": "2017-03-29T03:23:55.522Z",
    "created_at": "2017-03-29T03:23:55.522Z",
    "name": "winie ",
    "phone_number": "0921405957",
    "__v": 0
  },
  {
    "_id": "58db28d07f10171fff0b666b",
    "updated_at": "2017-03-29T03:24:00.094Z",
    "created_at": "2017-03-29T03:24:00.094Z",
    "name": "winie ",
    "phone_number": "0921405957",
    "__v": 0
  },
  {
    "_id": "58db28fd53e2fc20450223f9",
    "updated_at": "2017-03-29T03:24:45.142Z",
    "created_at": "2017-03-29T03:24:45.142Z",
    "name": "john ",
    "phone_number": "+25110111213",
    "__v": 0
  },
  {
    "_id": "58db2a3505cbfa20dd08f49d",
    "updated_at": "2017-03-29T03:29:57.752Z",
    "created_at": "2017-03-29T03:29:57.752Z",
    "name": "jessy ",
    "phone_number": "+25110101213",
    "__v": 0
  }
]
*/ 
router.get('/', contact.getContacts);



// Export Router
module.exports = router;

