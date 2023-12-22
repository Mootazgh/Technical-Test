//  Import Express.js
const express = require("express");
// Import Mongoose
const mongoose = require("mongoose");
// Import the CORS
const cors = require("cors");

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Allow All Origins with Default of cors
app.use(cors());
// Import the Form model
const { Form } = require("./models/FormModel");
// Import the form router
const formRouter = require("./routes/formrouter");
// Use the form router at the /forms path
app.use("/forms", formRouter);

// Connect database and start server

mongoose
  .connect("mongodb://127.0.0.1:27017/LatDynamicForms")
  .then(() => {
    console.log("app concted to database");
    app.listen(6002, () => {
      console.log("App is listenig is the port ");
    });
  })
  .catch((error) => {
    console.log(error);
  });
