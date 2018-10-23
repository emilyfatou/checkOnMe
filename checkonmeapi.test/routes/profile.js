// Load Module Dependencies
var express   =   require('express');
var profile = require('../controllers/profile');
 
// Create a Router
var router = express.Router();

 /** @api {get} /profiles/paginate paginate profile records
 * @apiName getByPagination
 * @apiGroup Profiles
 * 
 *  @apiParamExample Request Example:
 * 
 * localhost:8001/profiles/paginate?page=1&per_page=2
 * 
 * @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK
 * {
  "docs": [
    {
      "_id": "58f761002bca1817c738eaf5",
      "updated_at": "2017-04-19T13:07:12.633Z",
      "created_at": "2017-04-19T13:07:12.455Z",
      "user": {
        "_id": "58f761002bca1817c738eaf4",
        "updated_at": "2017-04-19T13:07:12.523Z",
        "created_at": "2017-04-19T13:07:12.321Z",
        "email": "biruk@gmail.com",
        "phone_number": "+25191397505050",
        "password": "$2a$07$uzB9rb5T9AWlXne.CJ90nuqA8pHLbEam6KW5qoxwExj/aaYxNLKB.",
        "staus": "active",
        "role": "customer",
        "realm": "user"
      },
      "first_name": "biruk",
      "last_name": "zen",
      "__v": 0,
      "customer": {
        "_id": "58f761002bca1817c738eaf6",
        "updated_at": "2017-04-19T13:07:12.546Z",
        "created_at": "2017-04-19T13:07:12.546Z",
        "profile": "58f761002bca1817c738eaf5",
        "emergency_type": "select",
        "location": "",
        "__v": 0,
        "message": [],
        "Service_provider": [],
        "contact": []
      }
    },
    {
      "_id": "58f765702bca1817c738eaf8",
      "updated_at": "2017-04-19T13:26:08.333Z",
      "created_at": "2017-04-19T13:26:08.320Z",
      "user": {
        "_id": "58f765702bca1817c738eaf7",
        "updated_at": "2017-04-19T13:28:31.087Z",
        "created_at": "2017-04-19T13:26:08.305Z",
        "email": "gebeya@gmail.com",
        "phone_number": "+25191444494",
        "password": "$2a$07$Gwz7flR1KCxfHBwYUO3CZe5iHsp38e2wYZpa2o4OlyjcM0Ahp5sTG",
        "last_login": "2017-04-19T13:28:31.086Z",
        "staus": "active",
        "role": "customer",
        "realm": "user"
      },
        ],
  "total": 21,
  "limit": 2,
  "page": 10,
  "pages": 11
}
 */ 
router.get('/paginate', profile.getByPagination);

 /**
 * @api {get} /profiles/:id request a specific user profile by id
 * @apiName getProfile
 * @apiGroup Profiles 
 * 
 * @apiParam {String} id unique profile id
 *  
 *  @apiParamExample Request Example:
 * 
 * profiles/58da1ac087f7855c63882eef
 * 
 *  @apiSuccess {String} _id Unique profile ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} date_created Date Created
 * @apiSuccess {String} _id unique user id from user signup
 * @apiSuccess {String} email user Email Address
 * @apiSuccess {String} PHONE_NUMBER user phone number
 * @apiSuccess {String} password user password
 * @apiSuccess {String} status the status of the user
 * @apiSuccess {String} role User Role
 * @apiSuccess {String} realm User Realm/Group
 * @apiSuccess {String} first_name first name of the user
 * @apiSuccess {String} last_name last name of the user
 * @apiSuccess {String} _id unique customer id
 * 
 * @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK
 * 
 * {
  "_id": "58da1ac087f7855c63882eef",
  "updated_at": "2017-03-29T01:45:25.911Z",
  "created_at": "2017-03-28T08:11:44.622Z",
  "user": {
    "_id": "58da1ac087f7855c63882eee",
    "updated_at": "2017-03-28T08:14:37.652Z",
    "created_at": "2017-03-28T08:11:44.605Z",
    "email": "jane@gmail.com",
    "phone_number": "+251911121314",
    "password": "$2a$07$l5XAyiodaUrxIts6f8sR/.i8H7F8M45nhCnRJ1RuMww6TcGP9rEaq",
    "staus": "active",
    "role": "customer",
    "realm": "user"
  },
  "first_name": "jane",
  "last_name": "doe",
  "__v": 0,
  "customer": {
    "_id": "58da1ac087f7855c63882ef0",
    "updated_at": "2017-03-28T08:11:44.626Z",
    "created_at": "2017-03-28T08:11:44.626Z",
    "profile": "58da1ac087f7855c63882eef",
    "__v": 0,
    "emergency_type": "select",
    "location": [],
    "message": [],
    "Service_provider": [],
    "contact": []
  },
}
 */
router.get('/:_id',profile.getProfile);
 /**@api {put} /profiles/:_Id update a specific user profile
* @apiName updateProfile
* @apiGroup Profiles 
*
* @apiParam {String} id profile id
* @apiParam {String} age age of the user
* @apiParam {String} country country of the user
* @apiParam {String} state the state where the user lives in
* @apiParam {String} city the city where the user lives in
*
* @apiParamExample Request Example:
localhost:8001/profiles/5901b5d150c89c16c2f22738
{
	
	"age":"25",
	"country":"ethiopia",
	"state":"oromiya",
	"city":"adama",
	"phone_number":"+2514879666"
  }
    
* @apiSuccessExample Response Example:
* HTTP/1.1 200 OK
* {
  "_id": "5901b5d150c89c16c2f22738",
  "updated_at": "2017-04-27T09:16:18.154Z",
  "created_at": "2017-04-27T09:11:45.458Z",
  "user": {
    "_id": "5901b5d150c89c16c2f22737",
    "updated_at": "2017-04-27T09:11:45.462Z",
    "created_at": "2017-04-27T09:11:45.443Z",
    "email": "free@gmail.com",
    "password": "$2a$07$Q9XV/qywEbQHMPzTwZF/DOPXosMBz7UkE5RVh5gP/5L3IJ2DRvKqO",
    "staus": "active",
    "role": "customer",
    "realm": "user"
  },
  "first_name": "harmony",
  "last_name": "fifth",
  "phone_number": "+2514879666",
  "__v": 0,
  "customer": {
    "_id": "5901b5d150c89c16c2f22739",
    "updated_at": "2017-04-27T09:11:45.463Z",
    "created_at": "2017-04-27T09:11:45.463Z",
    "profile": "5901b5d150c89c16c2f22738",
    "__v": 0,
    "message": [],
    "Service_provider": [],
    "contact": []
  },
  "age": 25,
  "country": "ethiopia",
  "state": "oromiya",
  "city": "adama"
}
  */
router.put('/:_id',profile.updateProfile);

/**
 * @api {get} /profiles/ get all user profiles
* @apiName getProfiles
* @apiGroup Profiles
*
* @apiParamExample Request Example:
*localhost:8001/profiles/
*
* @apiSuccessExample Response Example:
*   HTTP/1.1 200 OK
 * 
 * [{
    "_id": "58ff68deff73bc3d41f1dfc1",
    "updated_at": "2017-04-25T15:18:55.243Z",
    "created_at": "2017-04-25T15:18:54.909Z",
    "user": {
      "_id": "58ff68deff73bc3d41f1dfc0",
      "updated_at": "2017-04-25T15:36:07.200Z",
      "created_at": "2017-04-25T15:18:54.817Z",
      "email": "xxx@gmail.com",
      "phone_number": "+25191444494",
      "password": "$2a$07$6Ae5ZiImrNfVWpFbLGNq2u8J/Y0/AsTtYj4QjHqbd.MmelgT9JLm2",
      "last_login": "2017-04-25T15:36:07.200Z",
      "staus": "active",
      "role": "customer",
      "realm": "user"
    },
    "first_name": "harmony",
    "last_name": "fifth",
    "__v": 0,
    "customer": {
      "_id": "58ff68dfff73bc3d41f1dfc2",
      "updated_at": "2017-04-25T15:18:55.141Z",
      "created_at": "2017-04-25T15:18:55.141Z",
      "profile": "58ff68deff73bc3d41f1dfc1",
      "__v": 0,
      "emergency_type": "select",
      "location": [],
      "message": [],
      "Service_provider": [],
      "contact": []
    }
  }
]
 */
router.get('/',profile.getProfiles);

// Export Router
module.exports = router;


