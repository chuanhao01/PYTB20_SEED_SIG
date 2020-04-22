/*
This utils class is mainly for parsing dates in JS for MySQL
*/

// Importing libs needed
const moment = require('moment');

// Creating the main obj to be exported
const parseTime = {
    // convert the js time obj into a moment obj and get the mysql timestamp format
    /**
     *
     *
     * @param {String} js_date
     * @returns {string} [is in timestamp format YYYY-MM-DD hh:mm:ss]
     */
    convertTimeStamp(js_date){
        return moment(js_date).format('YYYY-MM-DD');
    }
};

module.exports = parseTime;