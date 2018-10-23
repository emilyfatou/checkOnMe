// Load Module Dependencies
var express = require('express');

var customer = require('../controllers/customer');

// Create a Router
var router = express.Router();

 /** @api {get} /customers/paginate paginate customer records
 * @apiName getByPagination
 * @apiGroup Customers
 * 
 *  @apiParamExample Request Example:
 * 
 * localhost:8001/customers/paginate?page=1&per_page=3
 * 
 * @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK
 * {
  "docs": [
    {
      "_id": "58db1fa1d79028187ef64ca2",
      "updated_at": "2017-03-29T02:44:49.284Z",
      "created_at": "2017-03-29T02:44:49.284Z",
      "profile": {
        "_id": "58db1fa1d79028187ef64ca1",
        "updated_at": "2017-03-29T02:44:49.294Z",
        "created_at": "2017-03-29T02:44:49.266Z",
        "user": "58db1fa1d79028187ef64ca0",
        "first_name": "sam",
        "last_name": "smith",
        "__v": 0,
        "customer": "58db1fa1d79028187ef64ca2"
      },
      "emergency_type": "select",
      "location": "",
      "__v": 0,
      "message": [],
      "Service_provider": [],
      "contact": []
    },
    {
      "_id": "58db2165d79028187ef64ca9",
      "updated_at": "2017-03-29T02:52:21.670Z",
      "created_at": "2017-03-29T02:52:21.670Z",
      "profile": {
        "_id": "58db2165d79028187ef64ca8",
        "updated_at": "2017-03-29T02:52:21.676Z",
        "created_at": "2017-03-29T02:52:21.661Z",
        "user": "58db2165d79028187ef64ca7",
        "first_name": "hunter",
        "last_name": "hayes",
        "__v": 0,
        "customer": "58db2165d79028187ef64ca9"
      },
      "emergency_type": "select",
      "location": "",
      "__v": 0,
      "message": [],
      "Service_provider": [],
      "contact": []
    },
    {
      "_id": "58dba8a5378c0c593b7432c5",
      "updated_at": "2017-03-29T12:29:25.014Z",
      "created_at": "2017-03-29T12:29:25.014Z",
      "profile": {
        "_id": "58dba8a4378c0c593b7432c4",
        "updated_at": "2017-03-29T12:29:25.083Z",
        "created_at": "2017-03-29T12:29:24.885Z",
        "user": "58dba8a4378c0c593b7432c3",
        "first_name": "harmony",
        "last_name": "fifth",
        "__v": 0,
        "customer": "58dba8a5378c0c593b7432c5"
      },
      "emergency_type": "select",
      "location": "",
      "__v": 0,
      "message": [],
      "Service_provider": [],
      "contact": []
    }
  ],
  "total": 17,
  "limit": 3,
  "page": 1,
  "pages": 6
}
 */ 

router.get('/paginate', customer.getByPagination);

 /** @api {get} /customers/ get all customer User types
 * @apiName getCustomers
 * @apiGroup Customers
 * 
 * @apiParamExample Request Example:
 * get customers/
 * 
 *  @apiSuccess {String} _id Unique customer ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} date_created Date Created
 * @apiSuccess {String} _id Unique profile ID
 * @apiSuccess {String} user Unique user ID
 * @apiSuccess {String} first_name first name of the customer user
 * @apiSuccess {String} last_name last name of the customer user
 * @apiSuccess {String} customer User Role and customer id
 *
 * @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 * [
  {
    "_id": "58db1fa1d79028187ef64ca2",
    "updated_at": "2017-03-29T02:44:49.284Z",
    "created_at": "2017-03-29T02:44:49.284Z",
    "profile": {
      "_id": "58db1fa1d79028187ef64ca1",
      "updated_at": "2017-03-29T02:44:49.294Z",
      "created_at": "2017-03-29T02:44:49.266Z",
      "user": "58db1fa1d79028187ef64ca0",
      "first_name": "sam",
      "last_name": "smith",
      "__v": 0,
      "customer": "58db1fa1d79028187ef64ca2"
    },
    "__v": 0,
    "emergency_type": "select",
    "location": [],
    "message": [],
    "Service_provider": [],
    "contact": []
  },
  {
    "_id": "58db2165d79028187ef64ca9",
    "updated_at": "2017-03-29T02:52:21.670Z",
    "created_at": "2017-03-29T02:52:21.670Z",
    "profile": {
      "_id": "58db2165d79028187ef64ca8",
      "updated_at": "2017-03-29T02:52:21.676Z",
      "created_at": "2017-03-29T02:52:21.661Z",
      "user": "58db2165d79028187ef64ca7",
      "first_name": "hunter",
      "last_name": "hayes",
      "__v": 0,
      "customer": "58db2165d79028187ef64ca9"
    },
    "__v": 0,
    "emergency_type": "select",
    "location": [],
    "message": [],
    "Service_provider": [],
    "contact": []
  }
]
 */
router.get('/', customer.getCustomers);


// Export Router
module.exports = router;
