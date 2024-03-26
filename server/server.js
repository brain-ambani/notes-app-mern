const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGODB = process.env.MONGODB_URI;

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

mongoose
  .connect(MONGODB)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Server is running on port ${PORT} and successfully connected to MongoDB`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
