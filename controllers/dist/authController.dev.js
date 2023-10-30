"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.googleCallback = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _passportGoogleOauth = _interopRequireDefault(require("passport-google-oauth2"));

var _config = require("../config/config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var googleCallback = function googleCallback(req, res) {
  var userData = req.user;
  res.send(userData);
};

exports.googleCallback = googleCallback;

_passport["default"].use(new _passportGoogleOauth["default"]({
  clientID: _config.GOOGLE_CLIENT_ID,
  clientSecret: _config.GOOGLE_CLIENT_SECRET,
  callbackURL: "https://lief-server.onrender.com/auth/google/callback"
}, function (accessToken, refreshToken, profile, done) {
  // You can save the user to your database here
  // For example:
  // User.findOrCreate({ googleId: profile.id }, (err, user) => {
  //   return done(err, user);
  // });
  return done(null, profile);
})); // Serialize user information into session


_passport["default"].serializeUser(function (user, done) {
  done(null, user);
}); // Deserialize user from session


_passport["default"].deserializeUser(function (user, done) {
  done(null, user);
});