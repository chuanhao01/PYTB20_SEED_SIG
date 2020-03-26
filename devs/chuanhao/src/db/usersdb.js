// Importing libs used in the file
const uuid = require('uuid/v4');

// Main obj getting exported
const usersdb = {
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
            (nric, dob, fullname, contact_num, email, user_id, deleted)
            values
            (?, ?, ?, ?, ?, ?, ?)
            `, [nric, dob, fullname, contact_num, email, user_id, 0], function(err, data){
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
     * @returns {promise} [mysql data]
     */
    updateUserInfoByUserId(user_id, nric, dob, fullname, contact_num, email){
        return new Promise((resolve, reject) => {
            this.pool.query(`
            UPDATE USERS
            SET nric = ?, dob = ?, fullname = ?, contact_num = ?, email = ?,
            WHERE user_id = ?
            `, [nric, dob, fullname, contact_num, email, user_id], function(err, data){
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
};

module.exports = usersdb;