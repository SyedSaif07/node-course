// Core Module
const path = require("path");

// Local Module
const rootDir = require("../utils/pathUtil");
const { registeredHomes } = require("./hostRouter");

// External Module
const express = require("express");

const userRouter = express.Router();

//  __dirname --> cwd
userRouter.get("/", (req, res, next) => {
  console.log(registeredHomes);
  //   res.sendFile(path.join(rootDir, "views", "home.html"));
  // 'home means home.ejs'
  res.render("home", { registeredHomes: registeredHomes,
    pageTitle: 'airbnb home'
   });
});

module.exports = userRouter;
