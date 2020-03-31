// Middleware for authenticating user and adding the user_id to res.user

// Importing utils libs
const utils = require('../utils/index');
const model = require('../db/index');

// Middleware function here
function userAuth(req, res, next){
    const token = req.cookies.token;
    if(token){
        // If the token exists in the cookie
        return new Promise((resolve) => {
            resolve(
                utils.jwtToken.decodeToken(token)
                    .catch(
                        function(err){
                            // Error in validating token, req.user = null
                            console.log(err);
                            req.user = null;
                            throw err;
                        }
                    )
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
                        return utils.jwtToken.refreshToken(token)
                            .catch(
                                function(err){
                                    // Error in validating token, req.user = null
                                    console.log(err);
                                    req.user = null;
                                    throw err;
                                }
                            );
                    }
                    else{
                        console.log('Error finding user');
                        req.user = null;
                        throw('Error finding user');
                    }
                }
            )
            .then(
                function(new_token){
                    // Refresh their token
                    res.status(302).cookie("token", new_token, { httpOnly: true });
                    next();
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