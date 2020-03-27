const crypto = require("crypto");
const fs = require("fs")
var string = crypto.randomBytes(512);

fs.writeFileSync(__dirname + "/reset.txt",string)