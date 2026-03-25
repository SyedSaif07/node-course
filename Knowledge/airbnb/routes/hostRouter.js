// Core Module
const path = require("path");

// Local Module
const rootDir = require("../utils/pathUtil");

const express = require("express");

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "addHome.html"));
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body.houseName);
  registeredHomes.push({houseName: req.body.houseName});
  res.sendFile(path.join(__dirname, "../", "views", "homeAdded.html"));
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
