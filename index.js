import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";
import router from "./routes/authRouter.js";
import injuryReportsRoute from "./routes/dbRouter.js";
import connectDB from "./config/dbConnect.js";
import mongoose from "mongoose";

const app = express();

const PORT = 3000;
connectDB();
const corsOptions = {
  origin: ["http://localhost:5173", "https://lief-injury-tracker.netlify.app"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", router);

app.use("/api", injuryReportsRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(27017, () => {
    console.log(`Server running on port 27017`);
  });
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

export default app;
