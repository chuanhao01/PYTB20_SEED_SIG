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
    },

    // Specific API calls
    // Getting events by user sign up status
    /**
     * Get the events the user has not signup for
     *
     * @param {string} user_id
     * @returns {Promise} [arr of evtns]
     */
    getEventsUserHasNotSignUp(user_id){
        return new Promise((resolve, reject) => {
            this.pool.query(`
            SELECT e.*
            FROM EVENTS e
            LEFT JOIN (SELECT * FROM SIGNUPS
            WHERE ((user_id = ?) AND (deleted = 0))) sg ON e.event_id = sg.event_id
            WHERE sg.event_id iS NULL;
            `, [user_id], function(err, data){
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
     * Gets the events the user has signed up for
     * For this, we are getting status = 0
     * 
     * @param {String} user_id
     * @returns {Promise} [arr of events]
     */
    getEventsUserSignUp(user_id){
        return new Promise((resolve, reject) => {
            this.pool.query(`
            SELECT e.*
            FROM SIGNUPS sg
            LEFT JOIN EVENTS e ON sg.event_id = e.event_id
            WHERE ((sg.user_id = ?) AND (sg.deleted = 0) AND (sg.status = 0))
            `, [user_id], function(err, data){
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
     * Gets the events the user has already participated in
     * For this, in the SIGNUPS table, status = 1
     * 
     * @param {String} user_id
     * @returns {Promise} [arr of events]
     */
    getEventsUserParticipated(user_id){
        return new Promise((resolve, reject) => {
            this.pool.query(`
            SELECT e.*
            FROM SIGNUPS sg
            LEFT JOIN EVENTS e ON sg.event_id = e.event_id
            WHERE ((sg.user_id = ?) AND (sg.deleted = 0) AND (sg.status = 1))
            `, [user_id], function(err, data){
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
     * Checks if the user has signed up for the event or participated in the event before
     * True is user has signed up or participated in the event
     * False if the user has not signed or participated in the event
     * 
     * @param {String} event_id
     * @param {String} user_id
     * @returns {Promise}
     */
    checkUserSignUpParticipatedEvent(event_id, user_id){
        return new Promise((resolve, reject) => {
            this.pool.query(`
            SELECT * FROM SIGNUPS
            WHERE ((event_id = ?) AND (user_id = ?) AND (deleted = 0))
            `, [event_id, user_id], function(err, data){
                if(err){
                    reject(err);
                }
                if(data.length === 1){
                    resolve(true);
                }
                else if(data.length === 0){
                    resolve(false);
                }
                else{
                    reject('Multiple events signed up or participated in');
                }
            });
        });
    },
    /**
     * Check if the user has signed up for the event
     * True if the user has signed up for the event
     * False if the user has not signed up for the event
     *
     * @param {String} event_id
     * @param {String} user_id
     * @returns {Promise} [bool / err]
     */
    checkUserSignUpEvent(event_id, user_id){
        return new Promise((resolve, reject) => {
            this.pool.query(`
            SELECT * FROM SIGNUPS
            WHERE ((event_id = ?) AND (user_id = ?) AND (deleted = 0) AND (status = 0))
            `, [event_id, user_id], function(err, data){
                if(err){
                    reject(err);
                }
                if(data.length === 1){
                    resolve(true);
                }
                else if(data.length === 0){
                    resolve(false);
                }
                else{
                    reject('Multiple events signed up for');
                }
            });
        });
    },

    // Backing out of signing up for the events
    /**
     * Delete/User backs out of signing up for an event
     *
     * @param {String} event_id
     * @param {String} user_id
     * @returns {Promise} [mysql data]
     */
    deleteUserSignUpForEvent(event_id, user_id){
        return new Promise((resolve, reject) => {
            this.pool.query(`
            UPDATE SIGNUPS
            SET deleted = 1
            WHERE ((event_id = ?) AND (user_id = ?) AND (status = 0)) 
            `, [event_id, user_id], function(err, data){
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

module.exports = signupsdb;