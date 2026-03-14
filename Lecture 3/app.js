const http = require("http");

const server = http.createServer((req, res) => {
  // two params : first request second response

  console.log(req.url, req.method, req.headers);
  
  res.setHeader('Content-Tye', 'text/html');
  res.write('<html>');
  res.write('<head><title>My Learning</title> </head>');
  if (req.url === '/') {
    res.write('<body><h1>Learning</h1></body>');
    res.write('</html>');
    return res.end();
  } else if (req.url === '/subjects'){
    res.write('<body><h1>Subjects</h1></body>');
    res.write('</html>');
    return res.end();
  }

  // req.on('data', chunk => {
  //   console.log(chunk)
  // }) fetching chunk from data

//   process.exit(); // to kill the server
}); // createServer requires function as a param

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost: ${PORT}`)
});
