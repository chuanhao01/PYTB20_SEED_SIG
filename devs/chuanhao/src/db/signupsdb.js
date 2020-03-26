// Importing libs used in the file
const uuid = require('uuid/v4');

// Main obj getting exported
const signupsdb = {
    // Setting up the pool property in the object
    /**
     *
     *
     * @param {mysql_obj_pool} pool
     */
    init(pool){
        this.pool = pool;
    },
    // CRUD Operations here
    // Create a signup, like a user signing up for an event
    /**
     *
     *
     * @param {string} event_id
     * @param {string} user_id
     * @returns {Promise} [signup_id]
     */
    createSignup(event_id, user_id){
        return new Promise((resolve, reject) => {
            const signup_id = uuid();
            this.pool.query(`
            INSERT INTO SIGNUPS
            (event_id, user_id, signup_id, status, deleted)
            VALUES
            (?, ?, ?, ?, ?) 
            `, [event_id, user_id, signup_id, 0, 0], function(err, data){
                if(err){
                    reject(err);
                }
                else{
                    resolve(signup_id);
                }
            });
        });
    },
    // Gets the data to a signup by singup_id
    /**
     *
     *
     * @param {string} signup_id
     * @returns {Promise} [data of the signup]
     */
    getSignupInfoBySignupId(signup_id){
        return new Promise((resolve, reject) => {
            this.pool.query(`
            SELECT * FROM SIGNUPS
            WHERE ((signup_id = ?) AND (deleted = 0)) 
            `, [signup_id], function(err, data){
                if(err){
                    reject(err);
                }
                else{
                    // Returns the arr of data from the select query
                    resolve(data);
                }
            });
        });
    },
    // Update a singup by the signup_id
    /**
     *
     *
     * @param {String} signup_id
     * @param {Int} status
     * @returns {Promise} [mysql data]
     */
    updateSignupDataBySignupId(signup_id, status){
        return new Promise((resolve, reject) => {
            this.pool.query(`
            UPDATE SIGNUPS
            SET status = ?
            WHERE ((signup_id = ?) AND (deleted = 0)) 
            `, [status, signup_id], function(err, data){
                if(err){
                    reject(err);
                }
                else{
                    resolve(data);
                }
            });
        });
    }
};

module.exports = signupsdb;