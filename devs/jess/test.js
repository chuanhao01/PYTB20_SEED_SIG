const express = require("express");
const https = require("https");
const fs  = require("fs");
var app = express();

app.use(function(req,res,next){
    if(req.secure){
        next()
    }
    else{
        res.redirect("https://localhost:4444")
    }

})

app.get("/",(req,res)=>{
    console.log("hi")
    res.send("fuck you");
});

var server  = https.createServer({
    key: fs.readFileSync("./key.key"),
    cert: fs.readFileSync("./cert.crt")
},app);

app.listen(3333);
server.listen(4444);
