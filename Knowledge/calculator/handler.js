const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Tye", "text/html");
    res.write(`
        <html>
            <head><title>My Learning</title> </head>
            <body>
                <h1>Welcome</h1>
            </body>"
        </html>
    `);
    return res.end();
  }
  res.setHeader("Content-Tye", "text/html");
  res.write(`
        <html>
            <head><title>My Learning</title> </head>
            <body>
                <h1>Page does not exist</h1>
            </body>
        </html>
    `);
  return res.end();
};

exports.requestHandler = requestHandler; // sending it as an exports object {}
