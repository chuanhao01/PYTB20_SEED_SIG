/**
 * File: index.js
 * --------------
 * Main file that contains all the API controllers so that it can be imported easily
 */

// Importing all the API controllers
const userController = require('./userController');

// Main API controllers object
const APIcontrollers = {
    init(app) {
        // Get 2 random cookies
        app.get('/getCookies', function(req, res){
            res
            .cookie('refresh_token', 'I am the refresh token')
            .cookie('access_token', 'I am the access token', {
                httpOnly: true
            })
            .send('Made the cookies');
        });
        // Removing the 2 tokens
        app.get('/removeCookies', function(req, res){
            res
            .clearCookie('refresh_token')
            .clearCookie('access_token')
            .send('Cookies are cleared');
        });
        // Just to test if the api request can make it through
        app.get('/test', function(req, res){
            res.send('Test recieved');
        });
        userController.init(app);
    },
};

module.exports = APIcontrollers;