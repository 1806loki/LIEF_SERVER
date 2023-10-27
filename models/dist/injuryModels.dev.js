"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cosn;
var InjuryReport = new Schema({
  Reporter: {
    type: string,
    required: required
  },
  DateOfIncident: {
    type: Date,
    required: required
  },
  TimeofIncident: {
    type: String,
    required: required
  },
  DateofReport: {
    type: Date,
    "default": Date.now()
  },
  Injuries: {
    type: Object,
    required: required
  }
});