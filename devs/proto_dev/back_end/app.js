const express = require("express");
const cookieParser = require("cookie-parser");
const welcomeController = require("./controllers/welcomeController");
const app = express();
const https = require("https");
const fs = require("fs");


// check whether user is connecting through http. If so redirect them to https
app.use((req,res,next)=>{
    if(req.secure){
        next();
    }
    else{
        res.redirect("https://localhost:4444");
    }

});
app.use(express.static("./assets"));
app.use(cookieParser());
welcomeController(app);
app.listen("4040"); // listen for ppl connecting through http

// Create https server with the cert and key
var server  = https.createServer({
    // certificate
    key: fs.readFileSync("./key.key"),
    cert: fs.readFileSync("./cert.crt")
},app);
server.listen(4444); // https @ port 4444