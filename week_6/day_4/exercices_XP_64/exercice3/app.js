const { readFile, writeFile } = require("./fileManager");

const content = readFile("helloWorld.txt");
console.log(content);

writeFile("byeWorld.txt", "Writing to the file");