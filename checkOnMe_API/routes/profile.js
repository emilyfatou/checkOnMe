// Load Module Dependencies
var express = require('express');
var profile = require('../controllers/profile');

// Create a Router
var router = express.Router();

/**
 ** @api {get} /profiles/search search a customer by name
 * @apiName searchCustomer
 * @apiGroup Profiles 
 * 
 *  @apiParam {String} phone_number customer phone number
 *  
 *  @apiParamExample Request Example:
 * localhost:8001/profiles/search?first_name='simret'
 * 
 * @apiSuccess {String} _id Unique profile ID
* @apiSuccess {String} updated_at Last Modified Date
* @apiSuccess {String} date_created Date Created
* @apiSuccess {Object} user user information from user signup
* @apiSuccess {Object} customer customer information
* @apiSuccess {String} age user Email Address
* @apiSuccess {String} country user phone number
* @apiSuccess {String} state user password
* @apiSuccess {String} city the status of the user
* @apiSuccess {Object} emergency_contacts emergency contacts information

 *   @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK
 * 
 * [
  {
    "_id": "590acf6f8703f80f092262ef",
    "updated_at": "2017-05-04T11:23:22.513Z",
    "created_at": "2017-05-04T06:51:27.538Z",
    "user": "590acf6f8703f80f092262ee",
    "first_name": "simret",
    "last_name": "abu",
    "phone_number": "+2514879666",
    "__v": 0,
    "customer": {
      "_id": "590acf6f8703f80f092262f0",
      "updated_at": "2017-05-04T06:51:27.650Z",
      "created_at": "2017-05-04T06:51:27.650Z",
      "profile": "590acf6f8703f80f092262ef",
      "contact": [],
      "__v": 0,
      "message": [],
      "Service_provider": []
    },
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
  }
]
 */
router.get('/search', profile.searchCustomer);
/**
 * @api {get} /profiles/ get all profiles
* @apiName getProfiles
* @apiGroup Profiles
*
* @apiParamExample Request Example:
*localhost:8001/profiles/
*
*  @apiSuccess {String} _id Unique profile ID
* @apiSuccess {String} updated_at Last Modified Date
* @apiSuccess {String} date_created Date Created
* @apiSuccess {Object} user user information from user signup
* @apiSuccess {Object} customer customer information
* @apiSuccess {String} age user Email Address
* @apiSuccess {String} country user phone number
* @apiSuccess {String} state user password
* @apiSuccess {String} city the status of the user
* @apiSuccess {Object} emergency_contacts emergency contacts information

* @apiSuccessExample Response Example:
*   HTTP/1.1 200 OK
 * 
 * [  {
    "_id": "590a13188b8dab6b4a46d208",
    "updated_at": "2017-05-03T20:15:44.336Z",
    "created_at": "2017-05-03T17:27:52.649Z",
    "user": "590a13188b8dab6b4a46d207",
    "first_name": "simret",
    "last_name": "abu",
    "phone_number": "+2514879666",
    "__v": 0,
    "customer": {
      "_id": "590a13188b8dab6b4a46d209",
      "updated_at": "2017-05-03T17:27:52.684Z",
      "created_at": "2017-05-03T17:27:52.684Z",
      "profile": "590a13188b8dab6b4a46d208",
      "contact": [],
      "__v": 0,
      "message": [],
      "Service_provider": []
    },
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
  {
    "_id": "590acf6f8703f80f092262ef",
    "updated_at": "2017-05-04T11:23:22.513Z",
    "created_at": "2017-05-04T06:51:27.538Z",
    "user": "590acf6f8703f80f092262ee",
    "first_name": "simret",
    "last_name": "abu",
    "phone_number": "+2514879666",
    "__v": 0,
    "customer": {
      "_id": "590acf6f8703f80f092262f0",
      "updated_at": "2017-05-04T06:51:27.650Z",
      "created_at": "2017-05-04T06:51:27.650Z",
      "profile": "590acf6f8703f80f092262ef",
      "contact": [],
      "__v": 0,
      "message": [],
      "Service_provider": []
    },
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
  }
]
 */
router.get('/', profile.getProfiles);

/** @api {get} /profiles/paginate pagination
* @apiName getByPagination
* @apiGroup Profiles
* 
*  @apiParamExample Request Example:
* 
* localhost:8001/profiles/paginate?page=1&per_page=2 
* @apiSuccessExample Response Example:
* HTTP/1.1 200 OK
* 
* {
 "docs": [
       {
     "_id": "590a13188b8dab6b4a46d208",
     "updated_at": "2017-05-03T20:15:44.336Z",
     "created_at": "2017-05-03T17:27:52.649Z",
     "user": "590a13188b8dab6b4a46d207",
     "first_name": "simret",
     "last_name": "abu",
     "phone_number": "+2514879666",
     "__v": 0,
     "customer": {
       "_id": "590a13188b8dab6b4a46d209",
       "updated_at": "2017-05-03T17:27:52.684Z",
       "created_at": "2017-05-03T17:27:52.684Z",
       "profile": "590a13188b8dab6b4a46d208",
       "contact": [],
       "__v": 0,
       "message": [],
       "Service_provider": []
     },
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
   {
     "_id": "590acf6f8703f80f092262ef",
     "updated_at": "2017-05-04T11:23:22.513Z",
     "created_at": "2017-05-04T06:51:27.538Z",
     "user": "590acf6f8703f80f092262ee",
     "first_name": "simret",
     "last_name": "abu",
     "phone_number": "+2514879666",
     "__v": 0,
     "customer": {
       "_id": "590acf6f8703f80f092262f0",
       "updated_at": "2017-05-04T06:51:27.650Z",
       "created_at": "2017-05-04T06:51:27.650Z",
       "profile": "590acf6f8703f80f092262ef",
       "contact": [],
       "__v": 0,
       "message": [],
       "Service_provider": []
     },
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
   }
 ],
  "total": 10,
 "limit": 2,
 "page": 1,
 "pages": 5
}
*/
router.get('/paginate', profile.getByPagination);

/**
* @api {get} /profiles/:id get a profile
* @apiName getProfile
* @apiGroup Profiles 
* 
* @apiParam {String} id unique profile id
*  
*  @apiParamExample Request Example:
* 
* localhost:8001/profiles/590acf6f8703f80f092262ef
* 
*  @apiSuccess {String} _id Unique profile ID
* @apiSuccess {String} updated_at Last Modified Date
* @apiSuccess {String} date_created Date Created
* @apiSuccess {Object} user user information from user signup
* @apiSuccess {Object} customer customer information
* @apiSuccess {String} age user Email Address
* @apiSuccess {String} country user phone number
* @apiSuccess {String} state user password
* @apiSuccess {String} city the status of the user
* @apiSuccess {Object} emergency_contacts emergency contacts information
* 
* @apiSuccessExample Response Example:
* HTTP/1.1 200 OK
* 
* {
 "_id": "58da1ac087f7855c63882eef",
 "updated_at": "2017-03-29T01:45:25.911Z",
 "created_at": "2017-03-28T08:11:44.622Z",
 "user": {
 {
 "_id": "590acf6f8703f80f092262ef",
 "updated_at": "2017-05-04T11:23:22.513Z",
 "created_at": "2017-05-04T06:51:27.538Z",
 "user": "590acf6f8703f80f092262ee",
 "first_name": "simret",
 "last_name": "abu",
 "phone_number": "+2514879666",
 "__v": 0,
 "customer": {
   "_id": "590acf6f8703f80f092262f0",
   "updated_at": "2017-05-04T06:51:27.650Z",
   "created_at": "2017-05-04T06:51:27.650Z",
   "profile": "590acf6f8703f80f092262ef",
   "contact": [],
   "__v": 0,
   "message": [],
   "Service_provider": []
 },
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
}
*/
router.get('/:_id', profile.getProfile);



/**@api {put} /profiles/:_id update a profile
* @apiName updateProfile
* @apiGroup Profiles 
*
* @apiParam {String} id profile id
* @apiParam {String} age age of the user
* @apiParam {String} country country of the user
* @apiParam {String} state the state where the user lives in
* @apiParam {String} city the city where the user lives in
* @apiParam {String} emergency_contacts contacts to be regestered as emergency contacts
* @apiParam {String} contact_name1 name of emergency contact1
* @apiParam {String} phone_number1 phone number of contact1
* @apiParam {String} contact_name2 name of emergency contact
*@apiParam {String} phone_number2 phone number of contact2

* @apiParamExample Request Example:
localhost:8001/profiles/590acf6f8703f80f092262ef

{
	
 "age":"25",
 "country":"ethiopia",
 "state":"oromiya",
 "city":"adama",
 "phone_number":"+2514879666",
 "emergency_contacts":{
 "contact_name1":"tam",
 "phone_number1":"123456789",
 "contact_name2":"romha",
 "phone_number2":"012345789"
 }
 }
   
  @apiSuccess {String} _id Unique profile ID
* @apiSuccess {String} updated_at Last Modified Date
* @apiSuccess {String} date_created Date Created
* @apiSuccess {Object} user user information from user signup
* @apiSuccess {Object} customer customer information
* @apiSuccess {String} age user Email Address
* @apiSuccess {String} country user phone number
* @apiSuccess {String} state user password
* @apiSuccess {String} city the status of the user
* @apiSuccess {Object} emergency_contacts emergency contacts information

* @apiSuccessExample Response Example:
* HTTP/1.1 200 OK
* {
 "_id": "590acf6f8703f80f092262ef",
 "updated_at": "2017-05-04T07:52:31.491Z",
 "created_at": "2017-05-04T06:51:27.538Z",
 "user": "590acf6f8703f80f092262ee",
 "first_name": "simret",
 "last_name": "abu",
 "phone_number": "+2514879666",
 "__v": 0,
 "customer": {
   "_id": "590acf6f8703f80f092262f0",
   "updated_at": "2017-05-04T06:51:27.650Z",
   "created_at": "2017-05-04T06:51:27.650Z",
   "profile": "590acf6f8703f80f092262ef",
   "contact": [],
   "__v": 0,
   "message": [],
   "Service_provider": []
 },
 "age": 25,
 "country": "ethiopia",
 "state": "oromiya",
 "city": "adama",
 "emergency_contacts": [
   {
     "_id": "590addbf2aaae81c1ec04476",
     "contact_name1": "tam",
     "phone_number1": "123456789",
     "contact_name2": "romha",
     "phone_number2": "012345789"
   }
 ]
}
 */
router.put('/:_id', profile.updateProfile);

 
// Export Router
module.exports = router;


