// Core Module
const path = require("path");

// External Modules
const express = require("express");

// Local Module
const homeRouter = require("./routes/homeRouter");
const contactRouter = require("./routes/contactRouter");

const rootDir = require("./utils/pathUtil");

const app = express();

// app.use((req, res, next) => {  
//   console.log("First dummy middleware", req.url, req.method);
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Second dummy middleware", req.url, req.method);
//   next();
// });

// app.use((req, res, next)=> {
//     console.log("Third dummy middleware", req.url, req.method)
//     res.send("<h1>Welcome to third</h1>");
// })

app.use(express.urlencoded()); // other way to parse req.body

app.use(homeRouter);
app.use(contactRouter);

app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "404.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost: ${PORT}`);
});
