// Middleware to set headers for CORS to work and send creds

// Middleware function here
function setHeaders(req, res, next){
    console.log(req.cookies, 'Cookies here');
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}

module.exports = setHeaders;