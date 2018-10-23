//load module dependencies
var mongoose = require('mongoose');
var paginator = require('mongoose-paginate');
var Schema = mongoose.Schema;

//define profile schema attribute
var ProfileSchema = new Schema({
    first_name: { type: String },
    last_name: { type: String },
    phone_number: { type: String },
    age: { type: Number },
    picture: { type: String },
    country: { type: String },
    state: { type: String },
    city: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
    admin: { type: Schema.Types.ObjectId, ref: 'Admin' }
}, {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    });
ProfileSchema.plugin(paginator);
//export profile model
module.exports = mongoose.model('Profile', ProfileSchema);