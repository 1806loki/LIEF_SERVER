import express from "express";

const router = express.Router();

import {
  createInjuryReports,
  deleteInjuryReport,
  getInjuryReports,
} from "../controllers/InjuryReportController.js";

router.post("/injuryReport", createInjuryReports);

router.get("/injuryReport", getInjuryReports);

router.delete("/injuryReport/:id", deleteInjuryReport);

export default router;
