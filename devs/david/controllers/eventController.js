/**
 * File: eventController.js
 * -----------------------
 * Controller for handling APIs pertaining to the events
 */

// Import libraries that are required

// Import the model needed for CRUD of DB

// event controller object
const eventController = {
    init(app) {
        // place all the endpoints here...
        // e.g: app.get ("/api/...", function(req, res) {});

        // API endpoint to create new event
        app.post("/api/event/", function (req, res) {
            // get all of the required fields to add new event

            // call the db method to add user to database
        });
    }
}

module.exports = eventController;