const lodash = require("lodash");
const math = require("./math");

console.log("Addition:", math.add(5, 3));
console.log("Multiplication:", math.multiply(4, 6));

console.log("Lodash sum:", lodash.sum([1, 2, 3, 4]));