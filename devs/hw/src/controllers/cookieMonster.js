const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const key = fs.readFileSync(path.resolve(__dirname + "/../assets/keys/key.txt"));

const payload = {
    iss: this.iss,
    sub: this.sub,
    user: this.username,
    iat: this.iat,
    exp: this.exp
};

var id = 0;

/**
 * Generates session id
 */
sid = () => {
    var number = id.toString();
    while (number.length < 10) {
        number += "0".concat(number);
    }
    return number
}

module.exports = {
    /**
     * Creates token to recognise the user on log in
     * @param {string} email email of the user
     * @param {function (Error,string)} callback function to call after creating the token
     */
    createToken: async (email, callback) => {
        if (typeof callback == "function") {
            var initialTime = Date.now();
            var expiryTime = initialTime + 15 * 60 * 1000; // expiry is set to 15 mins for now
            payload.iss = "localhost:4040";
            payload.sub = sid();
            payload.iat = initialTime;
            payload.exp = expiryTime;
            payload.email = email;
            jwt.sign(payload, key, { algorithm: 'HS512' }, (err, token) => {
                if (err) { callback(err); }
                else {
                    callback(undefined, token);
                }
            })
        }
    },
    /**
     * Validates token of user
     * @param {string} token token received by the user
     * @param {function(Error,string,string)} callback function to call after validating the token
     */
    validateToken: async (token, callback) => {
        /**
         * 
         * @param {String} token token of user 
         * @param {Number} time current time
         * @returns {string} refreshed token for the user
         */
        function refreshToken(token, time) {
            var newExpiry = time + 60 * 60 * 1000;
            token.iat = time;
            token.exp = newExpiry;
            jwt.sign(token, key, { algorithm: 'HS512' }, function (err, token) {
                if (err) { callback(err); }
                else {
                    return token;
                }
            })
        }
        if (typeof callback == "function") {
            jwt.verify(token, key, { algorithm: 'HS512' }, function (err, decoded) {
                if (err) {
                    callback(err);
                }
                else {
                    var currentTime = Date.now();
                    if ((currentTime - decoded.iat) / (decoded.exp - decoded.iat) > 0.5) {
                        var newToken = refreshToken(decoded,currentTime);
                        callback(undefined, newToken, decoded);
                    }
                    else {
                        callback(undefined, undefined, decoded);
                    }

                }
            })


        }

    },

}
