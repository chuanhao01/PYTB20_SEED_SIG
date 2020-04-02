// Importing libs used in the file
const uuid = require('uuid/v4');

// Main obj getting exported
const eventsdb = {
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
    // Creating an event
    /**
     *
     *
     * @param {string} title
     * @param {string} description
     * @param {datetime} event_date
     * @returns {promise} [event_id]
     */
    createNewEvent(title, description, event_date){
        return new Promise((resolve, reject) => {
            const event_id = uuid();
            this.pool.query(`
            INSERT INTO EVENTS
            (title, description, event_date, event_id, status, deleted) 
            values
            (?, ?, ?, ?, ?, ?)
            `, [title, description, event_date, event_id, 0, 0], function(err, data){
                if(err){
                    reject(err);
                }
                else{
                    resolve(event_id);
                }
            });
        });
    },
    // Reading an event by event_id
    /**
     *
     *
     * @param {string} event_id
     * @returns {promise} [mysql data]
     */
    getEventDataByEventId(event_id){
        return new Promise((resolve, reject) => {
            this.pool.query(`
            SELECT * FROM EVENTS
            WHERE ((event_id = ?) AND (deleted = 0)) 
            `, [event_id], function(err, data){
                if(err){
                    reject(err);
                }
                else{
                    // Returning the whole arr, is up to API to check
                    resolve(data);
                }
            });
        });
    },
    // Update the event data by event_id
    /**
     *
     *
     * @param {string} event_id
     * @param {string} title
     * @param {string} description
     * @param {datetime} event_date
     * @param {int} status
     * @returns {promise} [mysql data]
     */
    updateEventDataByEventId(event_id, title, description, event_date, status){
        return new Promise((resolve, reject) => {
            this.pool.query(`
            UPDATE EVENTS
            SET title = ?, description = ?, event_date = ?, status = ?
            WHERE ((event_id = ?) AND (deleted = 0)) 
            `, [title, description, event_date, status, event_id], function(err, data){
                if(err){
                    reject(err);
                }
                else{
                    resolve(data);
                }
            });
        });
    },
    // Specific API 
    /**
     * Get all the events
     *
     * @returns {Promise} [arr of evnts]
     */
    getAllEvents(){
        return new Promise((resolve, reject) => {
            this.pool.query(`
            SELECT * FROM EVENTS 
            WHERE deleted = 0
            `, function(err, data){
                if(err){
                    reject(err);
                }
                else{
                    resolve(data);
                }
            });
        });
    },

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

    // Closing events for signups
    /**
     * Returns the bool on if an event with the event id exists
     * true for event existsing
     * false for event not existing 
     *
     * @param {String} event_id
     * @returns {Promise} [bool]
     */
    checkIfEventExist(event_id){
        return new Promise((resolve, reject) => {
            this.pool.query(`
            SELECT * FROM EVENTS
            WHERE ((event_id = ?) AND (deleted = 0))
            `, [event_id], function(err, data){
                // err handled
                if(err){
                    reject(err);
                }
                if(data.length == 1){
                    // Event exists
                    resolve(true);
                }
                else{
                    // Any other length is false
                    reject('Event does not exists');
                }
            });
        });
    },

    /**
     * Closes an event, think of it as you can no longer signup for this event and all the signups are confirmed
     * It does this by closing the event then the signups tagged to the event
     * Controller side needs to check if the event exists in the first place
     * Note: If either query fails, only one error is seen by the controller
     *
     * @param {String} event_id
     * @returns {Promise} [mysql data]
     */
    closeEventAndSignups(event_id){
        // Setting the event status to 1 first
        return new Promise((resolve, reject) => {
            this.pool.query(`
            UPDATE EVENTS
            SET status = 1
            WHERE ((event_id = ?) AND (deleted = 0)) 
            `, [event_id], function(err, data){
                if(err){
                    reject(err);
                }
                else{
                    resolve(data);
                }
            });
        })
        .then(
            function(data){
                // Setting the signups for the event status to 1
                return new Promise((resolve, reject) => {
                    this.pool.query(`
                    UPDATE SIGNUPS
                    SET status = 1
                    WHERE ((event_id = ?) AND (deleted = 0))
                    `, [event_id], function(err, data){
                        if(err){
                            reject(err);
                        }
                        else{
                            resolve(data);
                        }
                    });
                });
            }
        );
    }
};

module.exports = eventsdb;