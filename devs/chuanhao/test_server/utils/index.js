// Importing the other utils libs
const maths = require('./maths');
const parseTime = require('./parseTime');
const jwtToken = require('./jwtToken');
const email = require('./email');

// Creating the main obj to export
const utils = {
    maths,
    parseTime,
    jwtToken,
    email,
};

module.exports = utils;
