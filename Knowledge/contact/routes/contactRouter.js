// Core Module
const path = require("path");

// External Modules
const express = require("express");
// const bodyParser = require("body-parser");

// Local Module
const rootDir = require("../utils/pathUtil");

const contactRouter = express.Router();

contactRouter.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactUs.html"));
});
// contactRouter.use(bodyParser.urlencoded()); // parse the request body before the request to get the data in req.body

contactRouter.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "contactSuccess.html"));
});

module.exports = contactRouter;
