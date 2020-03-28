const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const key = fs.readFileSync(path.resolve(__dirname + "/../creds/jwt/key.txt"));

const payload = {
    user: this.username,
    iat: this.iat,
    exp: this.exp
};

module.exports = {
    /**
     * Creates token to recognise the user on log in
     * @param {string} email email of the user
     * @param {function (Error,string)} callback function to call after creating the token
     */
    createToken(user_id){
        return new Promise((resolve, reject) => {
            let initialTime = Date.now();
            let expiryTime = initialTime + 30 * 60 * 1000; // expiry is set to 15 mins for now
            payload.iat = initialTime;
            payload.exp = expiryTime;
            payload.user_id = user_id;
            jwt.sign(payload, key, { algorithm: 'HS512' }, (err, token) => {
                if(err){
                    reject(err);
                }
                else {
                    resolve(token);
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
    decodeToken(token){
        return new Promise((resolve, reject) => {
            jwt.verify(token, key, { algorithm: 'HS512' }, function (err, decoded) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(decoded.user_id);
                }
            });
        });
    }
};
