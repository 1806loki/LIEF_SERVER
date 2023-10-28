import mongoose from "mongoose";
import { MONGODB_URL } from "./config.js";

const mongoURL = MONGODB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://admin:mongo123@ac-e85t195-shard-00-00.rzm9aia.mongodb.net:27017,ac-e85t195-shard-00-01.rzm9aia.mongodb.net:27017,ac-e85t195-shard-00-02.rzm9aia.mongodb.net:27017/?ssl=true&replicaSet=atlas-twp6sm-shard-0&authSource=admin&retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (err) {
    console.log(`Failed to Connect ${err}`);
  }
};

export default connectDB;
