const fs = require("fs");

const requestParser = (req, res) => {
  const body = [];
  req.on("data", (chunk) => {
    console.log(chunk);
    body.push(chunk);
  }); //fetching chunk from data (buffer data)

  req.on("end", () => {
    const fullBody = Buffer.concat(body).toString();
    console.log(fullBody);
    // const bodyObject = {};
    const params = new URLSearchParams(fullBody);
    // for (const [key, val] of params.entries()) {
    //   bodyObject[key] = val;
    // }
    const bodyObject = Object.fromEntries(params);
    console.log(bodyObject);
    fs.writeFileSync("user.txt", JSON.stringify(bodyObject)); // blocking the main thread
    fs.writeFile("user.txt", JSON.stringify(bodyObject), error => {
      console.log('Data written successfully')}); //async, frees the main thread
  });
};

module.exports = requestParser;
