const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const key = fs.readFileSync(path.resolve(__dirname + "/../creds/jwt/key.txt"));

const maths = require('./maths');

module.exports = {
    /**
     * Creates the access_token for the user with the user_id
     * 
     * @param {string} user_id
     * @returns {Promise} [jwt token]
     */
    createAccessToken(user_id){
        return new Promise((resolve, reject) => {
            let payload = {
                iat: maths.getJwtTime(Date.now()),
                exp: maths.getJwtTime(Date.now() + 15 * 60 * 1000),
                user_id : user_id,
            }
            jwt.sign(payload, key, { algorithm: 'HS512' }, function(err, token){
                if(err){
                    reject(err);
                }
                else{
                    resolve(token);
                }
            });
        });
    },
    /**
     * Returns a refresh jwt token
     *
     * @returns {Promise} [jwt token]
     */
    createRefreshToken(){
        return new Promise((resolve, reject) => {
            let payload = {
                iat: maths.getJwtTime(Date.now())
            };
            jwt.sign(payload, key, { algorithm: 'HS512' }, function(err, token){
                if(err){
                    reject(err);
                }
                else{
                    resolve(token);
                }
            });
        });
    },
    /**
     * Decodes and returns the user_id in the access_token
     *
     * @param {String} token
     * @returns {Promise} [user_id]
     */
    decodeAccessToken(access_token){
        return new Promise((resolve, reject) => {
            jwt.verify(access_token, key, { algorithm: 'HS512' }, function (err, decoded) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(decoded.user_id);
                }
            });
        });
    },
    /**
     * Bool to check if token is correct
     *
     * @param {String} token
     * @returns {Promise} [bool]
     */
    verifyToken(token){
        return new Promise((resolve, reject) => {
            jwt.verify(token, key, { algorithm: 'HS512' }, function(err, decoded){
                if(err){
                    reject(err);
                }
                else{
                    if(decoded){
                        resolve(true);
                    }
                    else{
                        // If there is any other errors
                        resolve(false);
                    }
                }
            });
        });
    },
    /**
     * Decodes and returns the decoded object, else error
     *
     * @param {String} token
     * @returns {Promise} [decoded]
     */
    decodeToken(token){
        return new Promise((resolve, reject) => {
            jwt.verify(token, key, { algorithm: 'HS512' }, function (err, decoded) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(decoded);
                }
            });
        });
    },
    /**
     * Validates token of user
     * @param {string} token token received by the user
     * @param {function(Error,string,string)} callback function to call after validating the token
     */
    refreshToken(token){
        return new Promise((resolve, reject) => {
            jwt.verify(token, key, { algorithm: 'HS512' }, function (err, decoded) {
                if (err) {
                    reject(err);
                }
                else {
                    let currentTime = Date.now();
                    if ((currentTime - decoded.iat) / (decoded.exp - decoded.iat) > 0.5) {
                        // If the token is about halfway through, get new_payload then sign it
                        const new_payload = decoded;
                        new_payload.iat = currentTime;
                        new_payload.exp = currentTime + 30 * 60 * 1000;
                        jwt.sign(new_payload, key, { algorithm: 'HS512' }, function(err, new_token){
                            if(err){
                                reject(err);
                            }
                            else{
                                // New token is generated
                                resolve(new_token);
                            }
                        });
                    }
                    else {
                        resolve(token);
                    }

                }
            });
        });
    },
};
