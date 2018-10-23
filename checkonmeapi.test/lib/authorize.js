// Load Module Dependencies
var async   = require('async');

module.exports = function authorize(types) {

  return function middleware(req, res, next) {
    
    //defining a variable n setting a value
    var user = req._user;

    if(!user) {
      res.status(401);//unauthorize
      res.json({
        message: 'You Are Not even a user!'
      });
      return;
    }

    var isOk = false;

    types.forEach(function iterator(type) {
      if(user.role === type || user.realm === type) {
        isOk = true;
      }
    });

    if(!isOk) {
      res.status(401);
      res.json({
        message: 'You Are Not Allowed!!!!'
      });
      return;

    } else {
      return next();

    }

  };

}
