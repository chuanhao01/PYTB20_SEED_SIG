/**
 * File: index.js
 * --------------
 * Main file that contains all the API controllers so that it can be imported easily
 */

// Importing all the API controllers
const userController = require("./userController.js");
const eventController = require("./eventController.js");
const signupController = require("./signupController.js");

// Main API controllers object
const APIcontrollers = {
    init(app) {
        userController.init(app);
        eventController.init(app);
        signupController.init(app);
    },
};

module.exports = APIcontrollers;