const http = require("http");
const requestHandler = require('./request')
const server = http.createServer(requestHandler); // createServer requires function as a param
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost: ${PORT}`);
});
