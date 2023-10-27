import mongoose, { Schema } from "mongoose";

const InjuryReportSchema = new Schema({
  reporter: {
    type: String,
    required: true,
  },
  dateOfIncident: {
    type: Date,
    required: true,
  },
  timeOfIncident: {
    type: String,
    required: true,
  },
  reportedDate: {
    type: String,
    required: true,
  },
  injuredParts: {
    type: [String],
    required: true,
  },
  details: {
    type: Object,
    required: true,
  },
});

const InjuryReportModel = mongoose.model(
  "InjuryReportModel",
  InjuryReportSchema
);

export default InjuryReportModel;
