
//load module dependencies

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//defining serviceProviderSchema attributes
var serviceProviderSchema = new Schema({
    name: { type: String },
    phone_number: { type: String, default: '911' },
    customers_number: { type: Schema.Types.ObjectId, ref: 'Customer' },
    messages: { type: Schema.Types.ObjectId, ref: 'Message' },
 }, {

        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    });

//export service provider model

module.exports = mongoose.model('ServiceProvider', serviceProviderSchema);