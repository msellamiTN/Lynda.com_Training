var path = require("path");

console.log(__dirname);
console.log(__filename);

console.log(`Hello World from ${path.basename(__filename)}`);