const fs = require("fs");

function writeToFile(html) {
  fs.writeFile("./newHTML/index.html", html, (err) => {
    if (err) {
      throw err;
    } else {
      console.log("SUCCESS: INDEX.HTML PAGE GENERATED");
    }
  });
}

module.exports = writeToFile;
