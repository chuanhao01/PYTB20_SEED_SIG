// Middleware for authenticating the path the user is going to

// Importing utils libs
const utils = require('../utils/index');

// Setting up whitelisted paths
const whitelisted_paths = [
    '/api/users',
    '/api/login',
    '/api/logout',
    '/api/refresh_token',
];

function pathAuth(req, res, next){
    console.log(req.originalUrl);
    if(whitelisted_paths.includes(req.originalUrl) || req.originalUrl.match(/\/api\/refresh_token\/*/)){
        // If the path they are going to is ok 
        next();
    }
    else{
        if(req.user === undefined || req.user === null){
            // If they are going to other paths and they are not logged in
            res.redirect('/api/logout');
        }
        else{
            next();
        }
    }
}

module.exports = pathAuth;