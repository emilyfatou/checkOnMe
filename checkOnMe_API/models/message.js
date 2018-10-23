//load module dependencies
var paginator=require('mongoose-paginate');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//definie alertSchema attributes
var MessageSchema = new Schema({
    from: { type: Schema.Types.ObjectId, ref: 'Profile' },
    to: [{
        emergency_contacts: { type: Schema.Types.ObjectId, ref: 'Profile' },
        serviceProviders: { type: Schema.Types.ObjectId, ref: 'ServiceProvider'}
    }],
    content: {
        message: { type: String },
        location: { type: String },
     },
    status: { type: String, default: 'sent' }
}, {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    });
//pagination
MessageSchema.plugin(paginator);

//export alert model
module.exports = mongoose.model('Message', MessageSchema);

