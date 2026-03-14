const requestHandler = (req, res) => {
  // two params : first request second response

  console.log(req.url, req.method, req.headers);

  res.setHeader("Content-Tye", "text/html");
  res.write("<html>");
  res.write("<head><title>My Learning</title> </head>");
  if (req.url === "/") {
    res.write("<body><h1>Learning</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/subjects") {
    res.write("<body><h1>Subjects</h1></body>");
    res.write("</html>");
    return res.end();
  }

  //   process.exit(); // to kill the server
}; 

module.exports = requestHandler;
