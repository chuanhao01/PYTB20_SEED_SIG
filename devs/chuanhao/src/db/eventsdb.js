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
};

module.exports = eventsdb;