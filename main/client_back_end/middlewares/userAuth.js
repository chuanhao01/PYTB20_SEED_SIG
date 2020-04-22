// Middleware for authenticating user and adding the user_id to res.user

// Importing utils libs
const utils = require('../utils/index');
const model = require("../db");

// Middleware function here
function userAuth(req, res, next){
    const access_token = req.cookies.access_token;
    const refresh_token = req.cookies.refresh_token;
    if(access_token || refresh_token){
        // Check the access_token first
        return new Promise((resolve) => {
            utils.jwtToken.decodeAccessToken(access_token)
            .then(
                function(user_id){
                    // If the access token had no errors, resolve it down
                    resolve(user_id);
                }
            )
            .catch(
                function(err){
                    // If there was an error, resolve the refresh token
                    console.log(err);
                    resolve(
                        model.accounts.getUserByRefreshToken(refresh_token)
                            .then(
                                function(user){
                                    return new Promise((resolve, reject) => {
                                        if(user.length == 1){
                                            const user_id = user[0].user_id;
                                            utils.jwtToken.createAccessToken(user_id)
                                                .then(
                                                    function(access_token){
                                                        // If access token can be generated again
                                                        res.cookie('access_token', access_token, { httpOnly: true });
                                                        resolve(user_id);
                                                    }
                                                )
                                                .catch(
                                                    function(err){
                                                        // Any error, throw it
                                                        console.log(err);
                                                        reject(err);
                                                    }
                                                );
                                        }
                                        else{
                                            reject('Refresh token not found');
                                        }
                                    });
                                }
                            )
                            .catch(
                                function(err){
                                    // Somewhere it faild
                                    console.log(err);
                                    req.user = null;
                                    throw err;
                                }
                            )
                    );
                }
            );
        })
            .then(
                function(user_id){
                    // Getting the user data by user_id
                    return model.users.getUserDataByUserId(user_id)
                        .catch(
                            function(err){
                                console.log(err);
                                req.user = null;
                                throw err;
                            }
                        );
                }
            )
            .then(
                function(user){
                    if(user.length === 1){
                        // User exists, set the req.user
                        req.user = user[0];
                        next();
                    }
                    else{
                        console.log('Error finding user');
                        req.user = null;
                        throw 'Error finding user';
                    }
                }
            )
            .catch(
                function(err){
                    console.log(err);
                    next();
                }
            );
    }
    else{
        // No token, set req.user to null
        console.log('There is no token');
        req.user = null;
        next();
    }
}

module.exports = userAuth;