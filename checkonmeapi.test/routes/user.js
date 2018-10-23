// Load Module Dependencies
var express = require('express');
var user = require('../controllers/user');
var auth = require('../controllers/auth');
var authorize = require('../lib/authorize');

// Create a Router
var router = express.Router();

/**
 * @api {post} /users/signup Signup User
 * @apiName CreateUser
 * @apiGroup Users
 *
 * @apiParam {String} first_name  First Name
 * @apiParam {String} last_name Last Name
 * @apiParam {String} email Email Address
 * @apiParam {String} password User Password
 * @apiParam {String} user_type User Type - admin or customer
 * @apiParam {String} phone_number phone_number of the user
 *
 * @apiParamExample Request Example:
 {
	"first_name":"teddy",
	"last_name":"baleh",
	"email":"ted@gmail.com",
	"password":"123456",
	"user_type":"customer",
	"phone_number":"+251911121314"
 }
 *
 * @apiSuccess {String} _id Unique User ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} date_created Date Created
 * @apiSuccess {String} email user Email Address
 * @apiSuccess {String} status the status of the user
 * @apiSuccess {String} role User Role
 * @apiSuccess {String} phone_number phone_number of the user
 * @apiSuccess {String} password User password
 * @apiSuccess {String} realm User Realm/Group

 * @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 [
  {
    "_id": "58da17e487f7855c63882ee5",
    "updated_at": "2017-03-28T07:59:32.722Z",
    "created_at": "2017-03-28T07:59:32.506Z",
    "email": "ted@gmail.com",
    "phone_number": "+251911121314",
    "password": "$2a$07$un4s8p2fPSELHOCIILk93e9TtJN/pm3l31b.rop1WQrm5Nmpy7y2e",
    "staus": "active",
    "role": "customer",
    "realm": "user"
  },
 */
router.post('/signup', user.createUser);
 /** @api {get} /users/paginate paginate User records
 * @apiName getByPagination
 * @apiGroup Users
 * 
 *  @apiParamExample Request Example:
 * 
 * localhost:8001/users/paginate?page=1&per_page=7
 * 
 * @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK
 * 
 * {
  "docs": [
    {
      "_id": "58e1712771d33872bee5610d",
      "updated_at": "2017-04-02T21:47:05.450Z",
      "created_at": "2017-04-02T21:46:15.316Z",
      "email": "steve@gmail.com",
      "phone_number": "+25191444494",
      "password": "$2a$10$bYfh5Xj1Tt0NM2riSEFRx./fyNJenasaFHhFv6GjV.alBPV/bYV5G",
      "staus": "active",
      "role": "customer",
      "realm": "user"
    },
    {
      "_id": "58e1713971d33872bee56110",
      "updated_at": "2017-04-02T21:47:24.554Z",
      "created_at": "2017-04-02T21:46:33.578Z",
      "email": "kyb@gmail.com",
      "phone_number": "+25191444494",
      "password": "$2a$10$u1SGXL5OIvFiDP41ZPA9X.YMW0dXsWdJqLgDCpVe2fzbtGip6pWLe",
      "staus": "active",
      "role": "customer",
      "realm": "user"
    }
  ],
  "total": 4,
  "limit": 2,
  "page": 1,
  "pages": 2
}
 */
router.get('/paginate', user.getByPagination);

/**
* @api {post} /users/login User login
* @apiName Login
* @apiGroup Users

* @apiParam {String} email Email Address
* @apiParam {String} password User Password
* @apiParamExample Request Example:
*{
  
 "email":"teddy@gmail.com",
 "password":"123456"
*}
*
* @apiSuccess {String} token generated token id 
* @apiSuccess {String} _id Unique User ID
* @apiSuccess {String} updated_at Last Modified Date
* @apiSuccess {String} date_created Date Created
* @apiSuccess {String} email user Email Address
* @apiSuccess {String} status the status of the user
* @apiSuccess {String} role User Role
* @apiSuccess {String} realm User Realm/Group
* 
* @apiSuccessExample Response Example:
* HTTP/1.1 200 OK
*{
 "token": "X0YpTvEhCT9Zv+5nUQDI",
 "user": {
   "_id": "58d6298c2c774c1d2ddb9865",
   "updated_at": "2017-03-25T11:14:36.625Z",
   "created_at": "2017-03-25T08:25:48.049Z",
   "email": "teddy@gmail.com",
   "staus": "active",
   "role": "customer",
   "realm": "user"
 }
}
*/
router.post('/:_id/login', auth.login);
/**
 * @api {get} /users/ request information of all users
 * @apiName getUsers
 * @apiGroup Users
 *  
 * @apiSuccess {String} _id Unique User ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} date_created Date Created
 * @apiSuccess {String} email user Email Address
 * @apiSuccess {String} phone_number phone_number of the user
 * @apiSuccess {String} status the status of the user
 * @apiSuccess {String} role User Role
 * @apiSuccess {String} realm User Realm/Group
 * 
 * @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK
[
  {
    "_id": "58da17e487f7855c63882ee5",
    "updated_at": "2017-03-28T07:59:32.722Z",
    "created_at": "2017-03-28T07:59:32.506Z",
    "email": "ted@gmail.com",
    "phone_number": "+251911121314",
    "password": "$2a$07$un4s8p2fPSELHOCIILk93e9TtJN/pm3l31b.rop1WQrm5Nmpy7y2e",
    "staus": "active",
    "role": "customer",
    "realm": "user"
  },
  {
    "_id": "58da1ac087f7855c63882eee",
    "updated_at": "2017-03-28T08:14:37.652Z",
    "created_at": "2017-03-28T08:11:44.605Z",
    "email": "jane@gmail.com",
    "phone_number": "+251911121314",
    "password": "$2a$07$l5XAyiodaUrxIts6f8sR/.i8H7F8M45nhCnRJ1RuMww6TcGP9rEaq",
    "staus": "active",
    "role": "customer",
    "realm": "user"
  }
]
 */
router.get('/', user.getUsers);
 
/**
 * @api {get} /users/:id request information of a specific user
 * @apiName getUser
 * @apiGroup Users 
 * 
 * @apiParam {String} id unique user id
 *  
 *  @apiParamExample Request Example:
 * 
 * users/58cc05510910cb0ad25c07db
 * 
 * @apiSuccess {String} _id Unique User ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} date_created Date Created
 * @apiSuccess {String} email user Email Address
 * @apiSuccess {String} phone_number phone_number of the user
 * @apiSuccess {String} status the status of the user
 * @apiSuccess {String} role User Role
 * @apiSuccess {String} realm User Realm/Group
 * 
 * @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK
{
  "_id": "58de8faca8e95f1cc2ae8220",
  "updated_at": "2017-03-31T19:59:47.362Z",
  "created_at": "2017-03-31T17:19:40.851Z",
  "email": "xyz@gmail.com",
  "phone_number": "+251910101011",
  "password": "$2a$07$EpckV1ZIQFGIcT.zVzo3c.VTf9ErXeVR//DDXVPduE1zDoq4mvy9u",
  "staus": "active",
  "role": "customer",
  "realm": "user"
}
 */
router.get('/:_Id', user.getUser);
 
/**
* @api {put} /users/:_Id update a specific user information
* @apiName updateUser
* @apiGroup Users 
*
* @apiParam {String} email Email Address
* @apiParam {String} phone_number User phone number
*
* @apiParamExample Request Example:
{
	 
	"email":"xyz@gmail.com",
	"phone_number":"+251910101011"
  }
*
* @apiSuccess {String} _id Unique User ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} date_created Date Created
 * @apiSuccess {String} email user Email Address
 * @apiSuccess {String} phone_number phone_number of the user
 * @apiSuccess {String} status the status of the user
 * @apiSuccess {String} role User Role
 * @apiSuccess {String} realm User Realm/Group
 * 
 * @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK
{
  "_id": "58de8faca8e95f1cc2ae8220",
  "updated_at": "2017-03-31T19:59:39.505Z",
  "created_at": "2017-03-31T17:19:40.851Z",
  "email": "xyz@gmail.com",
  "phone_number": "+251910101011",
  "password": "$2a$07$EpckV1ZIQFGIcT.zVzo3c.VTf9ErXeVR//DDXVPduE1zDoq4mvy9u",
  "staus": "active",
  "role": "customer",
  "realm": "user"
}
*/
router.put('/:_id', user.updateUser);

/**
 * @api {delete} /users/:id remove a specific user
 * @apiName DeleteUser
 * @apiGroup Users
 * 
 * @apiParam {String} user id   the unique user id to be delete
 * @apiParam {String} value token generated when user login 
 * @apiParam {String} key  type of key used authorization
 * 
 *  @apiParamExample Request Example:
  {
    "_id": "58da1ac087f7855c63882eee",
    "updated_at": "2017-03-28T08:14:37.652Z",
    "created_at": "2017-03-28T08:11:44.605Z",
    "email": "jane@gmail.com",
    "phone_number": "+251911121314",
    "password": "$2a$07$l5XAyiodaUrxIts6f8sR/.i8H7F8M45nhCnRJ1RuMww6TcGP9rEaq",
    "staus": "active",
    "role": "customer",
    "realm": "user"
  }
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {}
 */
router.delete('/:_id', user.removeUser);
/**
 * @api {post} /users/:_id/updatePass change password of a specific user
 * @apiName passwordChange
 * @apiGroup Users
 * 
 * @apiParam {String} password   current user password
 * @apiParam {String} new_password the new passwod to be used
 *  
 * @apiParamExample Request Example:
 * {
	 
	"password":"password",
	"new_password":"rlylongpassword"
  }
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
  "message": "password changed Sucessfully"
    }
 */
router.post('/:_id/updatePass', user.passwordChange);
 /**
* @api {post} /users/:_id/logout logged in user logging out
* @apiName logout
* @apiGroup Users
* 
* @apiParam {String} userId logged in user id
* @apiParam {string} tokenID user token
* 
* @apiParamExample Request Example:
* 
* users/58da182b87f7855c63882ee9/logout
* 
* @apiSuccessExample {json} Success-Response:
*     HTTP/1.1 200 OK
* {
 "message": "user Logged out successfully"
  }
 */

//logout end points
router.post('/:_id/logout', auth.logout);

//forgot password
router.post('/:_id/forgot', user.noop);

//reset password
router.post('/:_id/resetpass', user.noop);

  
// Export Router
module.exports = router;

