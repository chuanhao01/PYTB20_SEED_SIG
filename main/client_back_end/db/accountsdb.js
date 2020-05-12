/**
 * Main db file for anything to do with api keys and refresh tokens
 */

//  Getting the utils in the model
const utils = require('../utils');

// Main obj getting exported
const accountsdb = {
    // Setting up the pool property in the object
    /**
     *
     *
     * @param {mysql_obj_pool} pool
     */
    init(pool){
        this.pool = pool;
    },

    // For the refresh tokens
    /**
     * Creates the refresh token for the user
     * Should be used when a user is registered
     *
     * @param {String} user_id
     * @returns {Promise} [mysql data]
     */
    createRefreshToken(user_id){
        return new Promise((resolve, reject) => {
            utils.jwtToken.createRefreshToken()
            .then(
                function(refresh_token){
                    this.pool.query(`
                    INSERT INTO REFRESH_TOKENS
                    (user_id, refresh_token, deleted)
                    VALUES
                    (?, ?, ?)
                    `, [user_id, refresh_token, 0], function(err, data){
                        if(err){
                            reject(err);
                        }
                        else{
                            resolve(refresh_token);
                        }
                    });
                }.bind(this)
            )
            .catch(
                function(err){
                    // Just for the jwt errors to be passed up
                    reject(err);
                }
            );
        });
    },
    /**
     * Model to get the user tagged to the refresh token
     * Mainly to check if the refresh token is correct
     * No user is returned, reject the refresh token
     * Done on controller side
     *
     * @param {String} refresh_token
     * @returns {Promise} [arr of user_id] (Controller needs to check)
     */
    getUserByRefreshToken(refresh_token){
        return new Promise((resolve, reject) => {
            this.pool.query(`
            SELECT * FROM REFRESH_TOKENS
            WHERE ((refresh_token = ?) AND (deleted = 0)) 
            `, [refresh_token], function(err, data){
                if(err){
                    reject(err);
                }
                else{
                    resolve(data);
                }
            });
        });
    },
    /**
     * Gets the user's refresh token by email, email should be unique at this point
     * Mainly for the login api, when a user tries logging in by email
     * API controller needs to check output so as to control the errors
     *
     * @param {String} email
     * @returns {Promise} [arr of refresh_token]
     */
    getRefreshTokenByUserEmail(email){
        return new Promise((resolve, reject) => {
            this.pool.query(`
            SELECT r.refresh_token, r.user_id
            FROM REFRESH_TOKENS r LEFT JOIN USERS u ON r.user_id = u.user_id
            WHERE ((r.deleted = 0) AND (u.email = ?));
            `, [email], function(err, data){
                if(err){
                    reject(err);
                }
                else{
                    resolve(data);
                }
            });
        });
    },
};

module.exports = accountsdb;