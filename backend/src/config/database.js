require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected Successfully");
  } catch (err) {
    console.log("Failed to Connect Database");
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
