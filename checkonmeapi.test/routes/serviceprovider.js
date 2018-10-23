// Load Module Dependencies
var express = require('express');

var ServiceProvider = require('../controllers/serviceprovider');

// Create a Router
var router = express.Router();

/** @api {post} /ServiceProviders/  create ServiceProvider
* @apiName createServiceProvider
* @apiGroup ServiceProviders 
* 
* @apiParam {String} name the name of the service provider
* @apiParam {String} phone number phone number of the service provider 911
* 
*  @apiParamExample Request Example:
*  {
   "phone_number":"911",
  "name":"ambulance"
 
 }
 
* 
* @apiSuccess {String} _id Unique serviceprovider ID
* @apiSuccess {String} updated_at Last Modified Date
* @apiSuccess {String} created_at Date Created
* @apiSuccess {String} name name of the serviceprovider.
* @apiSuccess {String} phone_number  phone number of the serviceprovider 911
* 
* @apiSuccessExample Response Example:
*   HTTP/1.1 200 OK
*{
  "_id": "59021139cabc341cbf797143",
  "updated_at": "2017-04-27T15:41:45.672Z",
  "created_at": "2017-04-27T15:41:45.672Z",
  "name": "ambulance",
  "__v": 0,
  "phone_number": "911"
}
*/
router.post('/', ServiceProvider.createServiceProvider);

/** @api {get} /ServiceProviders/:_id  get ServiceProvider by id
 * @apiName getServiceProvider
 * @apiGroup ServiceProviders
 *  
 * @apiParam {String} id unique service provider id
 * 
 * @apiParamExample Request Example:
 * 
 * serviceproviders/58da06b027ccc951a6c4ec57
 * 
 * @apiSuccess {String} _id Unique serviceprovider ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {String} name name of the serviceprovider.
 * @apiSuccess {String} phone_number  phone number of the serviceprovider 911
 * 
 *  @apiSuccessExample Response Example:
 *   HTTP/1.1 200 OK
 *  {
  "_id": "59021139cabc341cbf797143",
  "updated_at": "2017-04-27T15:41:45.672Z",
  "created_at": "2017-04-27T15:41:45.672Z",
  "name": "ambulance",
  "__v": 0,
  "phone_number": "911"
   }
*/
router.get('/:_id', ServiceProvider.getServiceProvider);

// Export Router
module.exports = router;


