const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const notesRoute = require("./routes/notesRoute");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGODB = process.env.MONGODB_URI;

// Middleware for parsing JSON data
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/notes", notesRoute);

// connect to DB
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
