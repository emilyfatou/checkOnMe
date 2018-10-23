exports = module.exports = function (schema, options) {
  'use strict';

  var randomToken = require('random-token');

  var defaultOptions = {
    fieldName: 'token',
    createIndex: true,
    tokenLength: 16
  };

  options = options || {};
  options.fieldName = options.fieldName || defaultOptions.fieldName;
  options.createIndex = options.createIndex || defaultOptions.createIndex;
  options.tokenLength = options.tokenLength || defaultOptions.tokenLength;

  var tokenSchema = {};
  tokenSchema[options.fieldName] = {type: String};

  schema.add(tokenSchema);

  if (options.createIndex) {
    schema.path(options.fieldName).index({unique: true});
  }

  schema.pre('save', function (next) {
    var self = this;
    if (this.isNew) {
      self.token = randomToken(options.tokenLength);
      next();
    } else {
      next();
    }
  });
};
