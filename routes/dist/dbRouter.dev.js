"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _InjuryReportController = require("../controllers/InjuryReportController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post("/injuryReport", _InjuryReportController.createInjuryReports);
router.get("/injuryReport", _InjuryReportController.getInjuryReports);
router["delete"]("/injuryReport/:id", _InjuryReportController.deleteInjuryReport);
var _default = router;
exports["default"] = _default;