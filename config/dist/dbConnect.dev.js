"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mongoURL = "mongodb://admin:mongo123@ac-e85t195-shard-00-00.rzm9aia.mongodb.net:27017,ac-e85t195-shard-00-01.rzm9aia.mongodb.net:27017,ac-e85t195-shard-00-02.rzm9aia.mongodb.net:27017/?ssl=true&replicaSet=atlas-twp6sm-shard-0&authSource=admin&retryWrites=true&w=majority";

var connectDB = function connectDB() {
  return regeneratorRuntime.async(function connectDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_mongoose["default"].connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }));

        case 3:
          _context.next = 8;
          break;

        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);
          console.log("Failed to Connect ".concat(_context.t0));

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 5]]);
};

var _default = connectDB;
exports["default"] = _default;