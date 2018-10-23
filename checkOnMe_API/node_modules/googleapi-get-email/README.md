[![Build Status](https://travis-ci.org/miyoda/googleapi-get-email.svg?branch=master)](https://travis-ci.org/miyoda/googleapi-get-email)
[![Dependency Status](https://david-dm.org/miyoda/googleapi-get-email.svg)](https://david-dm.org/miyoda/googleapi-get-email)
[![devDependency Status](https://david-dm.org/miyoda/googleapi-get-email/dev-status.svg)](https://david-dm.org/miyoda/googleapi-get-email#info=devDependencies)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)   
Get email from google API with access_token
==============================================================

# Install
Execute:
> npm install --save googleapi-get-email

# Use example
```
var googleapiGetEmail = require('googleapi-get-email');
googleapiGetEmail(accessToken).then(function(emailInfo) {
  if (emailInfo.isVerified) {
    email = emailInfo.email;
  }
  callback();
}).catch(function(err) {
  console.log(err);
  callback();
});
```
