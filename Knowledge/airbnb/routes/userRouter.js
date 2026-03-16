// Core Module
const path = require("path");

// Local Module
const rootDir = require("../utils/pathUtil");

// External Module
const express = require("express");

const userRouter = express.Router();

//  __dirname --> cwd
userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = userRouter;
