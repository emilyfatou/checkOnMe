// Load Module Dependencies
var paginator = require('mongoose-paginate');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var moment = require('moment');
var config = require('../config');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

//define user attributes
var UserSchema = new Schema({
  email: { type: String, index: true, unique: true, required: true },
  password: { type: String },
  realm: { type: String, default: 'user' },
  role: { type: String, default: 'customer' },
  staus: { type: String, default: 'active' },
  last_login: { type: Date },
  Profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    , versionKey: false
  });

//unique validator 
UserSchema.plugin(uniqueValidator);

//pagination
UserSchema.plugin(paginator);



// Add a pre save hook
UserSchema.pre('save', function preSaveHook(next) {
  let model = this;

  bcrypt.genSalt(config.SALT_LENGTH, function genSalt(err, salt) {
    if (err) {
      return next(err);
    }
    // Store hash in your password DB.
    bcrypt.hash(model.password, salt, function hashPasswd(err, hash) {
      if (err) {
        return next(err);
      }

      model.password = hash;
      next();

    });
  });

});

// Compare Passwords Method
UserSchema.methods.checkPassword = function checkPassword(password, cb) {
  bcrypt.compare(password, this.password, function done(err, res) {
    if (err) {
      return cb(err);
    }

    cb(null, res);
  });

};
// Export User Model
module.exports = mongoose.model('User', UserSchema);
