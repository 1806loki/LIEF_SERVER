import express from "express";

const router = express.Router();

import {
  createInjuryReports,
  getInjuryReports,
} from "../controllers/InjuryReportController.js";

router.post("/injuryReport", createInjuryReports);

router.get("/injuryReport", getInjuryReports);

export default router;
