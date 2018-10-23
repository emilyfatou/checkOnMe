//load module dependencies
var mongoose = require('mongoose');
var paginator = require('mongoose-paginate');
var Schema = mongoose.Schema;

//define customer schema attribute
var CustomersSchema = new Schema({
    profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    contact: [{ type: Schema.Types.ObjectId, ref: 'Contact' }],
    Service_provider: [{ type: Schema.Types.ObjectId, ref: 'ServiceProvider' }],
    message: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
    location: { type: String },
}, {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    });

CustomersSchema.plugin(paginator);

//export profile model
module.exports = mongoose.model('Customer', CustomersSchema);