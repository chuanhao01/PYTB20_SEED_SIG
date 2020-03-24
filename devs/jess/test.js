const express = require("express");
const https = require("https");
const fs  = require("fs");
var app = express();


app.get("/",(req,res)=>{
    console.log("hi")
    res.send("fuck you");
});

var server  = https.createServer({
    key: fs.readFileSync("./key.key"),
    cert: fs.readFileSync("./cert.crt")
},app);

server.listen(4444);
