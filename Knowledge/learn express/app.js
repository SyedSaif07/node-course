//  Core Modules
// const http = require("http");

// External Modules
const express = require("express");

const app = express();

// Order of usage of middleware is very important
app.get("/",(req, res, next) => {
  console.log("First middleware", req.url, req.method);
  // res.send("<p>Welcome to my first page </p>")
  next(); // cannot call next after send
});


app.post("/submit-details", (req, res, next) => {
  console.log("Second middleware", req.url, req.method);
  res.send("<p>Welcome to my third page </p>")
});

app.use("/",(req, res, next) => {
  console.log("First middleware", req.url, req.method);
  res.send("<p>Welcome to my second page </p>") // send means response ends
  next(); // cannot call next after send
}); 

// const server = http.createServer(app);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost: ${PORT}`);
});
