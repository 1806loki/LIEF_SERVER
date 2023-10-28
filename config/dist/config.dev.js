"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MONGODB_URL = exports.GOOGLE_CLIENT_SECRET = exports.GOOGLE_CLIENT_ID = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
exports.GOOGLE_CLIENT_ID = GOOGLE_CLIENT_ID;
var GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
exports.GOOGLE_CLIENT_SECRET = GOOGLE_CLIENT_SECRET;
var MONGODB_URL = process.env.MONGODB_URL;
exports.MONGODB_URL = MONGODB_URL;