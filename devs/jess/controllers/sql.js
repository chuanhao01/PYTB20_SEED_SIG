const mysql = require("mysql");
const bcrypt = require("bcrypt");
const cookieMonster = require("./cookieMonster");
const connection = mysql.createPool({
    host: "localhost",
    user: "pikachu",
    password: "password",
    database: "random"
});
module.exports = {
    /**
    *    Registers the user
    *   @param {string} email: email to be registered
    *   @param {function(Error,string)} callback function to be called after registering
    */
    register: async (email, callback) => {

        if (typeof callback == "function") {
            connection.query("SELECT * FROM email where email=?", [email], function (err, results, fields) {
                if (err) { callback(err); }
                else {
                    if (results.length > 0) { callback("Email exists!"); }
                    else {
                        connection.query("INSERT INTO email (email) VALUES (?)",[email],err=>{
                            if (err) { callback(err); }
                            // creates token when successful
                            cookieMonster.createToken(email,(err, token) => {
                                if (err) { callback(err); }
                                else {
                                     callback(undefined, token) 
                                    }
                            })
                        })

                    }
                }

            })
        }
    },

    /**
    *   Logs the user in
    *   @param {string} email: email to be registered
    *   @param {function(Error,string)} callback function to be called after logging in
    */
    login:async (email, callback) => {
        if (typeof callback == "function") {
            connection.query("SELECT * FROM email where email=?", [email], function (err, results, fields) {
                if (err) { callback(err); }
                else {
                    if (results.length < 0) {
                        callback("Email does not exist!");
                    }
                    else {
                        // creates token when successful
                        cookieMonster.createToken("email", (err, token) => {
                            if (err) { callback(err); }
                            else { callback(undefined, token); }
                        })
                    }
                }

            })
        }
    }
}
