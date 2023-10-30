import passport from "passport";
import GoogleStrategy from "passport-google-oauth2";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "../config/config.js";

export const googleCallback = (req, res) => {
  const userData = req.user;
  res.send(userData);
};

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "https://lief-server.onrender.com/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // You can save the user to your database here
      // For example:
      // User.findOrCreate({ googleId: profile.id }, (err, user) => {
      //   return done(err, user);
      // });
      return done(null, profile);
    }
  )
);

// Serialize user information into session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user from session
passport.deserializeUser((user, done) => {
  done(null, user);
});


