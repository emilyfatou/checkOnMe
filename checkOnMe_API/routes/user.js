// Load Module Dependencies
var express = require('express');
var user = require('../controllers/user');
var auth = require('../controllers/auth');
var authorize = require('../lib/authorize');

// Create a Router
var router = express.Router();
/**
 * @api {get} /users/ get all users
 * @apiName getUsers
 * @apiGroup Users
 * 
 * @apiParamExample Request Example:
 * localhost:8001/users/

* @apiSuccess {String} _id Unique User ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {String} email Email Address
 * @apiSuccess {String} phone_number user phone number
 * @apiSuccess {String} password user password
 * @apiSuccess {Object} profile user profile information
 * @apiSuccess {String} realm User Realm/Group
 * @apiSuccess {String} role User Role
 * @apiSuccess {String} last_login last login time
 * 
 * @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK
[
  {
    "_id": "590a13188b8dab6b4a46d207",
    "updated_at": "2017-05-03T17:28:08.839Z",
    "created_at": "2017-05-03T17:27:52.501Z",
    "email": "y@gmail.com",
    "password": "$2a$07$0Z6p3FVe.DUehE34vkQEnOI6hF8vlEar.q7SmvImCAVKYEXo49a6q",
    "profile": {
      "_id": "590a13188b8dab6b4a46d208",
      "updated_at": "2017-05-03T20:15:44.336Z",
      "created_at": "2017-05-03T17:27:52.649Z",
      "user": "590a13188b8dab6b4a46d207",
      "first_name": "simret",
      "last_name": "abu",
      "phone_number": "+2514879666",
      "__v": 0,
      "customer": "590a13188b8dab6b4a46d209",
      "age": 25,
      "country": "ethiopia",
      "state": "oromiya",
      "city": "adama",
      "emergency_contact1": "romha",
      "phone_number1": "+123456789",
      "emergency_contact2": "rich",
      "phone_number2": "00000000",
      "emergency_contacts": []
    },
    "last_login": "2017-05-03T17:28:08.838Z",
    "staus": "active",
    "role": "customer",
    "realm": "user"
  },
  {
    "_id": "590acf6f8703f80f092262ee",
    "updated_at": "2017-05-04T06:52:02.135Z",
    "created_at": "2017-05-04T06:51:27.333Z",
    "email": "ere@gmail.com",
    "password": "$2a$07$Vq5hUPZfofGacK20HjuG3uJGhVRYxoFG1uzHhge8vLlFF3zFyHipi",
    "profile": {
      "_id": "590acf6f8703f80f092262ef",
      "updated_at": "2017-05-04T11:23:22.513Z",
      "created_at": "2017-05-04T06:51:27.538Z",
      "user": "590acf6f8703f80f092262ee",
      "first_name": "simret",
      "last_name": "abu",
      "phone_number": "+2514879666",
      "__v": 0,
      "customer": "590acf6f8703f80f092262f0",
      "age": 25,
      "country": "ethiopia",
      "state": "oromiya",
      "city": "adama",
      "emergency_contacts": [
        {
          "_id": "590b0f2aae30a1352a0620fd",
          "contact_name1": "tam",
          "phone_number1": "123456789",
          "contact_name2": "romha",
          "phone_number2": "012345789"
        }
      ]
    },
    "last_login": "2017-05-04T06:52:02.134Z",
    "staus": "active",
    "role": "customer",
    "realm": "user"
  },
  {
    "_id": "590b305b8d85085395256f84",
    "updated_at": "2017-05-04T13:45:23.197Z",
    "created_at": "2017-05-04T13:44:59.405Z",
    "email": "fere@gmail.com",
    "password": "$2a$07$JZLcnRK6HvStyyJE9.EHe.3HXssCWFwzKM7uUkQ67f02L1Ru.CVw.",
    "profile": {
      "_id": "590b305b8d85085395256f85",
      "updated_at": "2017-05-04T13:46:23.581Z",
      "created_at": "2017-05-04T13:44:59.609Z",
      "user": "590b305b8d85085395256f84",
      "first_name": "simret",
      "last_name": "abu",
      "phone_number": "+2514879666",
      "__v": 0,
      "customer": "590b305b8d85085395256f86",
      "age": 35,
      "country": "ethiopia",
      "state": "harara",
      "city": "dire",
      "emergency_contacts": [
        {
          "_id": "590b30af8d85085395256f89",
          "contact_name1": "der",
          "phone_number1": "123456789",
          "contact_name2": "biruk",
          "phone_number2": "012345789"
        }
      ]
    },
    "last_login": "2017-05-04T13:45:23.195Z",
    "staus": "active",
    "role": "customer",
    "realm": "user"
  }
]
 */
router.get('/', user.getUsers);
/**
 * @api {post} /users/signup user signup
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
 * localhost:8001/users/signup
{
	"first_name":"simret",
	"last_name":"abu",
	"email":"fere@gmail.com",
	"password":"123456",
	"user_type":"customer",
	"phone_number":"+25191444494"
 }
 *
 * @apiSuccess {String} _id Unique User ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} date_created Date Created
 * @apiSuccess {String} email user Email Address
 * @apiSuccess {String} status the status of the user
 * @apiSuccess {String} role User Role
  * @apiSuccess {String} password User password
 * @apiSuccess {String} realm User Realm/Group

 * @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 {
  "_id": "590b305b8d85085395256f84",
  "updated_at": "2017-05-04T13:44:59.405Z",
  "created_at": "2017-05-04T13:44:59.405Z",
  "email": "fere@gmail.com",
  "staus": "active",
  "role": "customer",
  "realm": "user"
}
 */
router.post('/signup', user.createUser);

 /** @api {get} /users/paginate pagination
 * @apiName getByPagination
 * @apiGroup Users
 * 
 *  @apiParamExample Request Example:
 * 
 * localhost:8001/users/paginate?page=1&per_page=3
 * 
 * @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK
 * 
 * {
  "docs": [
    {
      "_id": "590a13188b8dab6b4a46d207",
      "updated_at": "2017-05-03T17:28:08.839Z",
      "created_at": "2017-05-03T17:27:52.501Z",
      "email": "y@gmail.com",
      "password": "$2a$07$0Z6p3FVe.DUehE34vkQEnOI6hF8vlEar.q7SmvImCAVKYEXo49a6q",
      "profile": {
        "_id": "590a13188b8dab6b4a46d208",
        "updated_at": "2017-05-03T20:15:44.336Z",
        "created_at": "2017-05-03T17:27:52.649Z",
        "user": "590a13188b8dab6b4a46d207",
        "first_name": "simret",
        "last_name": "abu",
        "phone_number": "+2514879666",
        "__v": 0,
        "customer": "590a13188b8dab6b4a46d209",
        "age": 25,
        "country": "ethiopia",
        "state": "oromiya",
        "city": "adama",
        "emergency_contact1": "romha",
        "phone_number1": "+123456789",
        "emergency_contact2": "rich",
        "phone_number2": "00000000",
        "emergency_contacts": []
      },
      "last_login": "2017-05-03T17:28:08.838Z",
      "staus": "active",
      "role": "customer",
      "realm": "user"
    },
    {
      "_id": "590acf6f8703f80f092262ee",
      "updated_at": "2017-05-04T06:52:02.135Z",
      "created_at": "2017-05-04T06:51:27.333Z",
      "email": "ere@gmail.com",
      "password": "$2a$07$Vq5hUPZfofGacK20HjuG3uJGhVRYxoFG1uzHhge8vLlFF3zFyHipi",
      "profile": {
        "_id": "590acf6f8703f80f092262ef",
        "updated_at": "2017-05-04T11:23:22.513Z",
        "created_at": "2017-05-04T06:51:27.538Z",
        "user": "590acf6f8703f80f092262ee",
        "first_name": "simret",
        "last_name": "abu",
        "phone_number": "+2514879666",
        "__v": 0,
        "customer": "590acf6f8703f80f092262f0",
        "age": 25,
        "country": "ethiopia",
        "state": "oromiya",
        "city": "adama",
        "emergency_contacts": [
          {
            "_id": "590b0f2aae30a1352a0620fd",
            "contact_name1": "tam",
            "phone_number1": "123456789",
            "contact_name2": "romha",
            "phone_number2": "012345789"
          }
        ]
      },
      "last_login": "2017-05-04T06:52:02.134Z",
      "staus": "active",
      "role": "customer",
      "realm": "user"
    },
    {
      "_id": "590b305b8d85085395256f84",
      "updated_at": "2017-05-04T13:45:23.197Z",
      "created_at": "2017-05-04T13:44:59.405Z",
      "email": "fere@gmail.com",
      "password": "$2a$07$JZLcnRK6HvStyyJE9.EHe.3HXssCWFwzKM7uUkQ67f02L1Ru.CVw.",
      "profile": {
        "_id": "590b305b8d85085395256f85",
        "updated_at": "2017-05-04T13:46:23.581Z",
        "created_at": "2017-05-04T13:44:59.609Z",
        "user": "590b305b8d85085395256f84",
        "first_name": "simret",
        "last_name": "abu",
        "phone_number": "+2514879666",
        "__v": 0,
        "customer": "590b305b8d85085395256f86",
        "age": 35,
        "country": "ethiopia",
        "state": "harara",
        "city": "dire",
        "emergency_contacts": [
          {
            "_id": "590b30af8d85085395256f89",
            "contact_name1": "der",
            "phone_number1": "123456789",
            "contact_name2": "biruk",
            "phone_number2": "012345789"
          }
        ]
      },
      "last_login": "2017-05-04T13:45:23.195Z",
      "staus": "active",
      "role": "customer",
      "realm": "user"
    }
  ],
 "total": 33,
  "limit": 3,
  "page": 1,
  "pages": 11
}
 */
router.get('/paginate', user.getByPagination);

/**
* @api {post} /users/login user login
* @apiName Login
* @apiGroup Users

* @apiParam {String} email Email Address
* @apiParam {String} password user Password
* @apiParamExample Request Example:
localhost:8001/users/login
{
	"email":"fere@gmail.com",
	"password":"123456"
  }
*
* @apiSuccess {String} token generated token id 
* @apiSuccess {String} _id Unique User ID
* @apiSuccess {String} updated_at Last Modified Date
* @apiSuccess {String} date_created Date Created
* @apiSuccess {String} email user Email Address
* @apiSuccess {Object} profile user profile etails
* @apiSuccess {String} status the status of the user
* @apiSuccess {String} role User Role
* @apiSuccess {String} realm User Realm/Group
* 
* @apiSuccessExample Response Example:
* HTTP/1.1 200 OK
{
  "token": "SnZLM4LcRonXYaKzTMG5",
  "user": {
    "_id": "590b305b8d85085395256f84",
    "updated_at": "2017-05-04T13:44:59.616Z",
    "created_at": "2017-05-04T13:44:59.405Z",
    "email": "fere@gmail.com",
    "profile": {
      "_id": "590b305b8d85085395256f85",
      "updated_at": "2017-05-04T13:44:59.648Z",
      "created_at": "2017-05-04T13:44:59.609Z",
      "user": "590b305b8d85085395256f84",
      "first_name": "simret",
      "last_name": "abu",
      "phone_number": "+25191444494",
      "__v": 0,
      "customer": "590b305b8d85085395256f86",
      "emergency_contacts": []
    },
    "staus": "active",
    "role": "customer",
    "realm": "user"
  }
}
*/
router.post('/login', auth.login);
 /**
* @api {post} /users/logout  user logging out
* @apiName logout
* @apiGroup Users
* 
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
router.post('/logout/:_id', auth.logout);

 /**
 * @api {post} /users/forgotPassword/email forgot password
 * @apiName forgotPassword
 * @apiGroup Users
 * 
 * @apiParam {String} email   email address of the user
 * @apiParamExample Request Example:
 * 
 *localhost:8001/users/forgotPassword/tamri.mesfin@gmail.com
 * 
 *   @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * 
 * {
 * "message": "check your email inbox for a new password"
 */

router.post('/forgotPassword/:email', user.forgotPassword);

/**
 * @api {post} /users/updatePass/:_id change password
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

router.post('/updatePass/:_id', auth.passwordChange);

/**
 * @api {get} /users/:id get a specific user
 * @apiName getUser
 * @apiGroup Users 
 * 
 * @apiParam {String} id unique user id
 *  
 *  @apiParamExample Request Example:
 * 
 * localhost:8001/users//590acf6f8703f80f092262ee
 * 
@apiSuccess {String} _id Unique User ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {String} email Email Address
 * @apiSuccess {String} phone_number user phone number
 * @apiSuccess {String} password user password
 * @apiSuccess {Object} profile user profile information
 * @apiSuccess {String} realm User Realm/Group
 * @apiSuccess {String} role User Role
 * @apiSuccess {String} last_login last login time
 * 
 * @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK
{
  "_id": "590acf6f8703f80f092262ee",
  "updated_at": "2017-05-04T06:52:02.135Z",
  "created_at": "2017-05-04T06:51:27.333Z",
  "email": "ere@gmail.com",
  "password": "$2a$07$Vq5hUPZfofGacK20HjuG3uJGhVRYxoFG1uzHhge8vLlFF3zFyHipi",
  "profile": {
    "_id": "590acf6f8703f80f092262ef",
    "updated_at": "2017-05-04T11:23:22.513Z",
    "created_at": "2017-05-04T06:51:27.538Z",
    "user": "590acf6f8703f80f092262ee",
    "first_name": "simret",
    "last_name": "abu",
    "phone_number": "+2514879666",
    "__v": 0,
    "customer": "590acf6f8703f80f092262f0",
    "age": 25,
    "country": "ethiopia",
    "state": "oromiya",
    "city": "adama",
    "emergency_contacts": [
      {
        "_id": "590b0f2aae30a1352a0620fd",
        "contact_name1": "tam",
        "phone_number1": "123456789",
        "contact_name2": "romha",
        "phone_number2": "012345789"
      }
    ]
  },
  "last_login": "2017-05-04T06:52:02.134Z",
  "staus": "active",
  "role": "customer",
  "realm": "user"
}
 */
router.get('/:_id', user.getUser);
 
/**
* @api {put} /users/:_id update a user
* @apiName updateUser
* @apiGroup Users 
*
* @apiParam {String} email Email Address
* @apiParam {String} phone_number user phone number
*
* @apiParamExample Request Example:
localhost:8001/users/590c7bac5c51dc380ef8ef7a
{
	 
	"email":"xyz@gmail.com",
   }
*
* @apiSuccess {String} _id Unique User ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {String} email Email Address
 * @apiSuccess {String} phone_number user phone number
 * @apiSuccess {String} password user password
 * @apiSuccess {Object} profile user profile information
 * @apiSuccess {String} realm User Realm/Group
 * @apiSuccess {String} role User Role
 * @apiSuccess {String} last_login last login time
 * 
 * @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK
{
  "_id": "590c7bac5c51dc380ef8ef7a",
  "updated_at": "2017-05-06T03:00:04.719Z",
  "created_at": "2017-05-05T13:18:36.758Z",
  "email": "xyz@gmail.com",
  "password": "$2a$07$ffg38Gx8NlKHxszDlG2EbO1ufYQdeT7XOkt1YhbaWDsygUhto394e",
  "profile": {
    "_id": "590c7bad5c51dc380ef8ef7b",
    "updated_at": "2017-05-05T13:20:55.416Z",
    "created_at": "2017-05-05T13:18:37.339Z",
    "user": "590c7bac5c51dc380ef8ef7a",
    "first_name": "nathan",
    "last_name": "abu",
    "phone_number": "+251967823595",
    "__v": 0,
    "customer": "590c7bad5c51dc380ef8ef7c",
    "age": 25,
    "country": "ethiopia",
    "state": "oromiya",
    "city": "adama",
    "emergency_contacts": [
      {
        "_id": "590c7c375c51dc380ef8ef7f",
        "contact_name1": "tam",
        "phone_number1": "+251921405957"
      }
    ]
  },
  "last_login": "2017-05-05T14:10:19.400Z",
  "staus": "active",
  "role": "customer",
  "realm": "user"
*/
router.put('/:_id', user.updateUser);

 /**
 * @api {delete} /users/:id remove a specific user
 * @apiName DeleteUser
 * @apiGroup Users
 * 
 * @apiParam {String} user id   the unique user id to be delete
 * 
 *  @apiParamExample Request Example:
 * localhost:8001/users/590b305b8d85085395256f84
{
  "_id": "590b305b8d85085395256f84",
  "updated_at": "2017-05-04T13:45:23.197Z",
  "created_at": "2017-05-04T13:44:59.405Z",
  "email": "fere@gmail.com",
  "password": "$2a$07$JZLcnRK6HvStyyJE9.EHe.3HXssCWFwzKM7uUkQ67f02L1Ru.CVw.",
  "profile": {
    "_id": "590b305b8d85085395256f85",
    "updated_at": "2017-05-04T13:46:23.581Z",
    "created_at": "2017-05-04T13:44:59.609Z",
    "user": "590b305b8d85085395256f84",
    "first_name": "simret",
    "last_name": "abu",
    "phone_number": "+2514879666",
    "__v": 0,
    "customer": "590b305b8d85085395256f86",
    "age": 35,
    "country": "ethiopia",
    "state": "harara",
    "city": "dire",
    "emergency_contacts": [
      {
        "_id": "590b30af8d85085395256f89",
        "contact_name1": "der",
        "phone_number1": "123456789",
        "contact_name2": "biruk",
        "phone_number2": "012345789"
      }
    ]
  },
  "last_login": "2017-05-04T13:45:23.195Z",
  "staus": "active",
  "role": "customer",
  "realm": "user"
}
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {}
 */
router.delete('/:_id', user.noop);

 
// Export Router
module.exports = router;

