"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _passport = _interopRequireDefault(require("passport"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _authRouter = _interopRequireDefault(require("./routes/authRouter.js"));

var _dbRouter = _interopRequireDefault(require("./routes/dbRouter.js"));

var _dbConnect = _interopRequireDefault(require("./config/dbConnect.js"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = 3000;
(0, _dbConnect["default"])();
app.use((0, _cors["default"])({
  origin: "http://localhost:5173",
  methods: "CREATE,READ,UPDATE,DELETE"
}));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});
app.use((0, _expressSession["default"])({
  reSave: false,
  saveUninitialized: false,
  secret: "loki"
}));
app.use(_passport["default"].initialize());
app.use(_passport["default"].session());
app.use("/auth", _authRouter["default"]);
app.use("/api", _dbRouter["default"]);
app.get("/", function (req, res) {
  res.send("Hello World");
});
app.listen(PORT, function () {
  return console.log("Server is running at ".concat(PORT));
});

_mongoose["default"].connection.once('open', function () {
  console.log('Connected to MongoDB');
  app.listen(27017, function () {
    console.log("Server running on port 27017");
  });
});

_mongoose["default"].connection.on('error', function (err) {
  console.log(err);
});

var _default = app;
exports["default"] = _default;