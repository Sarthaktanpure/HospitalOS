require("dotenv").config();
const express = require("express");
const app = require("./app");
const connectDB = require("./config/database.js");

const startServer = async () => {
  await connectDB();
  const port = process.env.PORT;
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};

startServer();
