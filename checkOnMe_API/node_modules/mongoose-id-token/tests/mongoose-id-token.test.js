'use strict';

var should = require('should'),
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  token = require('../lib/mongoose-id-token'),
  Test;

describe('mongoose-id-token', function () {
  before(function (done) {

    mongoose.connect('mongodb://localhost/mongoose-id-token-test');

    var TestSchema = new Schema({
      text: {type: String}
    });

    TestSchema.plugin(token);

    Test = mongoose.model('Test', TestSchema);

    done();
  });

  after(function (done) {
    Test.remove(done);
  });

  it('should create the token filed', function (done) {
    var TestSchema = new Schema({
      text: {type: String}
    });

    should(TestSchema.paths.token).not.ok;

    TestSchema.plugin(token);
    should(TestSchema.paths.token).be.ok;

    done();
  });

  it('should create a token as value after saving a new model', function (done) {
    var test = new Test();
    test.text = 'DEMO';

    should(test.token).not.ok;

    test.save(function () {
      test.token.should.be.ok;

      done();
    });
  });
});
