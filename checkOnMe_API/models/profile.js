//load module dependencies
var mongoose = require('mongoose');
var paginator = require('mongoose-paginate');
var Schema = mongoose.Schema;

//define profile schema attribute
var ProfileSchema = new Schema({
    first_name: { type: String },
    last_name: { type: String },
    phone_number: { type: String },
    email:{type:String},
    age: { type: Number,default:'' },
    picture: { type: String,default:'' },
    country: { type: String,default:'' },
    state: { type: String,default:'' },
    city: { type: String,default:'' },
    emergency_contacts:{
      contact_name1: { type: String ,default:''},
      phone_number1: { type: String ,default:''},
      relationship1:{type:String ,default:''},
      contact_name2: { type: String ,default:''},
      phone_number2: { type: String,default:'' },
      relationship2:{type:String ,default:''}

    },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
    admin: { type: Schema.Types.ObjectId, ref: 'Admin' },
    message:{type:Schema.Types.ObjectId,ref:'Message'}
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});
ProfileSchema.plugin(paginator);
//export profile model
module.exports = mongoose.model('Profile', ProfileSchema);