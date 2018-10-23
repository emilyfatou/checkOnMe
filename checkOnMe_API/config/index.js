// Load Module Dependencies
 
module.exports = {
  // HTTP PORT
  //HTTP_PORT: 8001,
  HTTP_PORT: process.env.PORT || 8001,

  // MONGODB URL
  //MONGODB_URL: 'mongodb://localhost/check-on-me',
  MONGODB_URL:'mongodb://tamri:checkonme@ds129442.mlab.com:29442/checkonme',


  // SALT VALUE LENGTH
  SALT_LENGTH: 7,

  TOKEN_LENGTH: 15,

      // EMAIL SEND RETRY NUMBER
    RETRY_SEND_EMAIL : 3,
        bad_service : {
        password_recovery_wrong : "001"
    },
    // NEWLY GENERATED PASSWORD LENGTH
    NEW_PASSWORD_LENGTH : 8, 
};
