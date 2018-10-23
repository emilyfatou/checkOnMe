//load module dependencies
var uniqueValidator = require('mongoose-unique-validator');
var mongoose = require('mongoose');
var paginator=require('mongoose-paginate');

var Schema = mongoose.Schema;

//efine contact schema attribute

var ContactsSchema = new Schema({
    name: { type: String },
    phone_number: { type: String, index: true, unique: true, required: true },
    messages: { type: Schema.Types.ObjectId, ref: 'Message' },
    customers: { type: Schema.Types.ObjectId, ref: 'Customer' },
 
}, {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    });
    ContactsSchema.plugin(uniqueValidator);
   ContactsSchema.plugin(paginator);

//export contact model

module.exports = mongoose.model('Contacts', ContactsSchema);