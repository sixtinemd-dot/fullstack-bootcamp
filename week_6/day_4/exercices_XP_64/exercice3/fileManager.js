const fs = require("fs");

function readFile(path) {
  return fs.readFileSync(path, "utf-8", (err) => {});
}

function writeFile(path, content) {
  fs.writeFileSync(path, content, (err) => {});
}

module.exports = { readFile, writeFile };