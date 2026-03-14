console.log("Hello");

const fs = require('fs')

fs.writeFile('output.txt', "Writing file", (err) => {
    if (err) console.log('error occured');
    else console.log('File written successfully')
});