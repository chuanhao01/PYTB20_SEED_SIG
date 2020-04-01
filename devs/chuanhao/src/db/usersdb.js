// Importing libs used in the file
const uuid = require('uuid/v4');

// Main obj getting exported
const usersdb = {
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
    // Create a new user
    /**
     *
     *
     * @param {string} nric
     * @param {datetime} dob
     * @param {string} fullname
     * @param {string} contact_num
     * @param {string} email
     * @returns {promise} [user_id]
     */
    createNewUser(nric, dob, fullname, contact_num, email){
        return new Promise((resolve, reject) => {
            const user_id = uuid();
            this.pool.query(`
            INSERT INTO USERS
            (nric, dob, fullname, contact_num, email, PDPA, user_id, deleted)
            values
            (?, ?, ?, ?, ?, ?, ?, ?)
            `, [nric, dob, fullname, contact_num, email, 1, user_id, 0], function(err, data){
                if(err){
                    reject(err);
                }
                else{
                    // return is a user_id
                    resolve(user_id);
                }
            });
        });
    },
    // Getting user data by user_id
    /**
     *
     *
     * @param {string} user_id
     * @returns {promise} [mysql data]
     */
    getUserDataByUserId(user_id){
        return new Promise((resolve, reject) => {
            this.pool.query(`
            SELECT * FROM USERS
            WHERE ((user_id = ?) AND (deleted = 0))
            `, [user_id], function(err, data){
                if(err){
                    reject(err);
                }
                else{
                    // Up to API side to check if the user exists
                    resolve(data);
                }
            });
        });
    },
    // Update the user info by user_id
    /**
     *
     *
     * @param {string} user_id
     * @param {string} nric
     * @param {datetime} dob
     * @param {string} fullname
     * @param {string} contact_num
     * @param {string} email
     * @param {String} PDAP
     * @returns {promise} [mysql data]
     */
    updateUserInfoByUserId(user_id, nric, dob, fullname, contact_num, email, PDPA){
        return new Promise((resolve, reject) => {
            this.pool.query(`
            UPDATE USERS
            SET nric = ?, dob = ?, fullname = ?, contact_num = ?, email = ?, PDPA = ?
            WHERE ((user_id = ?) AND (deleted = 0))
            `, [nric, dob, fullname, contact_num, email, PDPA, user_id], function(err, data){
                if(err){
                    reject(err);
                }
                else{
                    resolve(data);
                }
            });
        });
    },

    // Specific database calls
    // Below here is for logging in
    /**
     * Checks if the email already exists in the db
     * Returns true if emails does exists already, false if email does not exists and err otherwise
     * @param {email} email
     * @returns {Promise} [bool / err]
     */
    checkUserEmail(email){
        return new Promise((resolve, reject) => {
            this.pool.query(`
            SELECT * FROM USERS
            WHERE ((email = ?) AND (deleted = 0)) 
            `, [email], function(err, data){
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
                    reject('Duplicate users');
                }
            });
        });
    },
    /**
     * Gets the user user_id by email
     * For the application so far, we assume the user email already exists and is unique
     *
     * @param {String} email
     * @returns {Promise} [user_id]
     */
    getUserIdByEmail(email){
        return new Promise((resolve, reject) => {
            this.pool.query(`
            SELECT user_id FROM USERS
            WHERE ((email = ?) AND (deleted = 0)) 
            `, [email], function(err, data){
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

module.exports = usersdb;