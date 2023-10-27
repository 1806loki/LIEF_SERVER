import InjuryReportModel from "../models/InjuryReportModel.js";

export const createInjuryReports = async (req, res) => {
  try {
    const {
      reporter,
      dateOfIncident,
      timeOfIncident,
      injuredParts,
      reportedDate,
      details,
    } = req.body;

    const newInjuryReport = new InjuryReportModel({
      reporter: reporter,
      dateOfIncident: dateOfIncident,
      timeOfIncident: timeOfIncident,
      reportedDate: reportedDate,
      injuredParts: injuredParts,
      details: details,
    });

    await newInjuryReport.save();

    res.status(200).json({ message: "New injury report created" });
  } catch (err) {
    console.error(`Error creating a new injury report: ${err}`);

    res
      .status(500)
      .json({ error: `Error creating a new injury report ${err}` });
  }
};

export const getInjuryReports = async (req, res) => {
  try {
    const reports = await InjuryReportModel.find();
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: `Internal server error: ${err.message}` });
  }
};
