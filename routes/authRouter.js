import express from "express";
import passport from "passport";
import { googleCallback } from "../controllers/authController.js";

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    googleCallback,
    successRedirect: "https://lief-injury-tracker.netlify.app/",
    failureRedirect: "/login",
  })
);

export default router;




