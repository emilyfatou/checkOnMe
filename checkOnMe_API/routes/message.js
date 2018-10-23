// Load Module Dependencies
var express = require('express');
var message = require('../controllers/message');
  
// Create a Router
var router = express.Router();
 
router.get('/', message.getMessages);

 /** @api {post} /messages/send send a message
 * @apiName sendMessage
 * @apiGroup Messages 
 * 
 * @apiParam {String} message the message body to be sent
 * @apiParam {String} to the reciver of the message contacts or 911
 * @apiParam {String} from the sender of the message customer phone number
 * 
 * @apiParamExample Request Example:
 * localhost:8001/messages/send
 *{
	
  "from":"+251921405957",
   "message":"check-on-me API connection test message",
   "to":"+251967823595"
   
}
 * @apiSuccess {String} deleivered delivery status
 *  @apiSuccess {String} message the message body being sent 
 * 
 *  @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK 
 * {
 * "message":"message sent succssfully"
 *}
 */
router.post('/send', message.sendMessage);
 
 router.get('/paginate', message.getByPagination);



router.delete('/:_id', message.noop);



// Export Router
module.exports = router;
