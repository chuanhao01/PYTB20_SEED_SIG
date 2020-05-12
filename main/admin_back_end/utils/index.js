// Importing the other utils libs
const maths = require('./maths');
const parseTime = require('./parseTime');
const jwtToken = require('./jwtToken');
const email = require('./email');
const csv = require('./csv');

// Creating the main obj to export
const utils = {
    maths,
    parseTime,
    jwtToken,
    email,
    csv,
};

module.exports = utils;
