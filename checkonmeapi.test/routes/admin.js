// Load Module Dependencies
var express   =   require('express');

var admin  = require('../controllers/admin');

// Create a Router
 var router = express.Router();

 /** @api {get} /admins/paginate paginate admin user records
 * @apiName getByPagination
 * @apiGroup Admins
 * 
 *  @apiParamExample Request Example:
 * 
 * localhost:8001/admins/paginate?page=1&per_page=2
 * 
 * @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK
 * {
  "docs": [
    {
      "_id": "58db20acd79028187ef64ca6",
      "updated_at": "2017-03-29T02:49:16.240Z",
      "created_at": "2017-03-29T02:49:16.240Z",
      "profile": {
        "_id": "58db20acd79028187ef64ca5",
        "updated_at": "2017-03-29T02:49:16.252Z",
        "created_at": "2017-03-29T02:49:16.228Z",
        "user": "58db20acd79028187ef64ca4",
        "first_name": "tracy",
        "last_name": "chapman",
        "__v": 0,
        "admin": "58db20acd79028187ef64ca6"
      },
      "__v": 0
    },
    {
      "_id": "58db21b0d79028187ef64cac",
      "updated_at": "2017-03-29T02:53:36.055Z",
      "created_at": "2017-03-29T02:53:36.055Z",
      "profile": {
        "_id": "58db21b0d79028187ef64cab",
        "updated_at": "2017-03-29T02:53:36.061Z",
        "created_at": "2017-03-29T02:53:36.045Z",
        "user": "58db21b0d79028187ef64caa",
        "first_name": "ed",
        "last_name": "sheeran",
        "__v": 0,
        "admin": "58db21b0d79028187ef64cac"
      },
      "__v": 0
    }
  ],
  "total": 3,
  "limit": 2,
  "page": 1,
  "pages": 2
}
 */ 
router.get('/paginate', admin.getByPagination);

 /**
 * @api {get} /admins/ get all admin Users
 * @apiName getAdmins
 * @apiGroup Admins
 * 
 * @apiParamExample Request Example:
 * get admins/
 * 
 *  @apiSuccess {String} _id Unique admin ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} date_created Date Created
 * @apiSuccess {String} _id Unique profile ID
 * @apiSuccess {String} user Unique user ID
 * @apiSuccess {String} first_name first name of the admin user
 * @apiSuccess {String} last_name last name of the admin user
 * @apiSuccess {String} admin User Role and admin id
 *
 * @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 [
  {
    "_id": "58db20acd79028187ef64ca6",
    "updated_at": "2017-03-29T02:49:16.240Z",
    "created_at": "2017-03-29T02:49:16.240Z",
    "profile": {
      "_id": "58db20acd79028187ef64ca5",
      "updated_at": "2017-03-29T02:49:16.252Z",
      "created_at": "2017-03-29T02:49:16.228Z",
      "user": "58db20acd79028187ef64ca4",
      "first_name": "tracy",
      "last_name": "chapman",
      "__v": 0,
      "admin": "58db20acd79028187ef64ca6"
    },
    "__v": 0
  },
  {
    "_id": "58db21b0d79028187ef64cac",
    "updated_at": "2017-03-29T02:53:36.055Z",
    "created_at": "2017-03-29T02:53:36.055Z",
    "profile": {
      "_id": "58db21b0d79028187ef64cab",
      "updated_at": "2017-03-29T02:53:36.061Z",
      "created_at": "2017-03-29T02:53:36.045Z",
      "user": "58db21b0d79028187ef64caa",
      "first_name": "ed",
      "last_name": "sheeran",
      "__v": 0,
      "admin": "58db21b0d79028187ef64cac"
    },
    "__v": 0
  }
]
*/
router.get('/',admin.getAdmins);



// Export Router
module.exports = router;
