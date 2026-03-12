const http = require("http");

const server = http.createServer((req, res) => {
  // two params : first request second response

  console.log(req);
  process.exit(); // to kill the server
}); // createServer requires function as a param

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost: ${PORT}`)
});
