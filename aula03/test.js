const fs = require("fs");
console.log(fs.readFileSync("../clientList.json", "utf-8"));

console.log(JSON.parse(fs.readFileSync("../clientList.json")));
