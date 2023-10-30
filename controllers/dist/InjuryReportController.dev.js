"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteInjuryReport = exports.getInjuryReports = exports.createInjuryReports = void 0;

var _InjuryReportModel = _interopRequireDefault(require("../models/InjuryReportModel.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createInjuryReports = function createInjuryReports(req, res) {
  var _req$body, reporter, dateOfIncident, timeOfIncident, injuredParts, reportedDate, details, newInjuryReport;

  return regeneratorRuntime.async(function createInjuryReports$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, reporter = _req$body.reporter, dateOfIncident = _req$body.dateOfIncident, timeOfIncident = _req$body.timeOfIncident, injuredParts = _req$body.injuredParts, reportedDate = _req$body.reportedDate, details = _req$body.details;
          newInjuryReport = new _InjuryReportModel["default"]({
            reporter: reporter,
            dateOfIncident: dateOfIncident,
            timeOfIncident: timeOfIncident,
            reportedDate: reportedDate,
            injuredParts: injuredParts,
            details: details
          });
          _context.next = 5;
          return regeneratorRuntime.awrap(newInjuryReport.save());

        case 5:
          res.status(200).json({
            message: "New injury report created"
          });
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error("Error creating a new injury report: ".concat(_context.t0));
          res.status(500).json({
            error: "Error creating a new injury report ".concat(_context.t0)
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.createInjuryReports = createInjuryReports;

var getInjuryReports = function getInjuryReports(req, res) {
  var reports;
  return regeneratorRuntime.async(function getInjuryReports$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_InjuryReportModel["default"].find());

        case 3:
          reports = _context2.sent;
          res.json(reports);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            error: "Internal server error: ".concat(_context2.t0.message)
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getInjuryReports = getInjuryReports;

var deleteInjuryReport = function deleteInjuryReport(req, res) {
  var deleteItem;
  return regeneratorRuntime.async(function deleteInjuryReport$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_InjuryReportModel["default"].findByIdAndDelete(req.params.id));

        case 3:
          deleteItem = _context3.sent;

          if (!deleteItem) {
            res.status(404).json("Error Not Found");
          }

          res.json({
            message: "Report Deleted Successfully"
          });
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            error: "Internal Server Error"
          });

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.deleteInjuryReport = deleteInjuryReport;