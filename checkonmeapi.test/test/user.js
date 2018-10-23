var request   = require('supertest');
var chai      = require('chai');

var app = require('../app');

var expect = chai.expect;

describe('User Endpoint', function () {
  var credentials = {
    email: 'jane@gmail.com',
    password: 'password',
    first_name: 'Jane',
    last_name: 'Doe'
  };

  describe('#Admin POST /users/signup', function () {

    credentials.user_type = 'admin';

    it('should create a new admin user', function(done) {

      request(app)
        .post('/users/signup')
        .set('Content-Type', 'application/json')
        .send(credentials)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(201)
        .end(function (err, res) {
          if(err) {
            return done(err);
          }

          // Assetion Tests on request body
          expect(res.body._id).to.be.a('string');
          expect(res.body.role).to.equal('admin');

          done();
        });

    });
  });

  describe('#Admin POST /users/login', function () {

    it('should login admin user', function(done) {

      request(app)
        .post('/users/login')
        .set('Content-Type', 'application/json')
        .send({ username: credentials.email, password: credentials.password })
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .end(function (err, res) {
          if(err) {
            return done(err);
          }

          // Assetion Tests on request body
          expect(res.body.role).to.be.a('string');

          done();
        });

    });
  });
});
