const sumRequestHandler = (req, res) => {
  console.log("In Sum request handler", req.url);
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObject = Object.fromEntries(params);
    const result = Number(bodyObject.first) + Number(bodyObject.second);
    return res.end();
  });
};
exports.sumRequestHandler = sumRequestHandler;
