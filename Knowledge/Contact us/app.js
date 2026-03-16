// External Modules
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use((req, res, next) => {
  console.log("First dummy middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Second dummy middleware", req.url, req.method);
  next();
});

// app.use((req, res, next)=> {
//     console.log("Third dummy middleware", req.url, req.method)
//     res.send("<h1>Welcome to third</h1>");
// })

app.get("/", (req, res, next) => {
  console.log("Handling for / GET", req.url, req.method);
  res.send(`<h1>Handling for / GET</h1>`);
});

app.get("/contact-us", (req, res, next) => {
  console.log("Handling for / GET", req.url, req.method);
  res.send(`<h1>Please provide your details </h1>
    <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder="Enter your name" />
    <input type="email" name="email" placeholder="Enter your email" />
    <input type="submit" /> 
    </form>
    `);
});
app.use(bodyParser.urlencoded()); // parse the request body before the request to get the data in req.body

app.post("/contact-us", (req, res, next) => {
  console.log(
    "Handling for /contact-us for POST",
    req.url,
    req.method,
    req.body,
  );
  res.send(`<h1>We will contact you shortly</h1>`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost: ${PORT}`);
});
