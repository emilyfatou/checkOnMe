module.exports = function(accessToken) {
  return new Promise(function (resolve, reject) {
    var unirest = require("unirest");
    unirest.get("https://www.googleapis.com/userinfo/email")
      .query({
        "oauth_token": accessToken,
        "alt": "json"
      })
     .end(function (res) {
        if (res.error) {
          reject(res.error);
        } else {
          resolve(res.body.data);
        }
      });
  });
};
