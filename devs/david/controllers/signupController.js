/**
 * File: signupController.js
 * -----------------------
 * Controller for handling APIs pertaining to the signups (for events)
 */

// Import libraries that are required

// Import the model needed for CRUD of DB

// signup controller object
const signupController = {
    init(app) {
        // place all the endpoints here...
        // e.g: app.get ("/api/...", function(req, res) {});

        // API endpoint to sign up for an event
        app.post("/api/event/:event_id/signups/", function (req, res) {
            // get all of the required fields to sign up for event

            // call the db method to add user to database
        });
    }
}

module.exports = signupController;