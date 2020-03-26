/**
 * File: userController.js
 * -----------------------
 * Controller for handling APIs pertaining to the user
 */

// Import libraries that are required

// Import the model needed for CRUD of DB

// user controller object
const userController = {
    init(app) {
        // place all the endpoints here...
        // e.g: app.get ("/api/...", function(req, res) {});

        // API endpoint to create new account
        app.post("/api/users/", function (req, res) {
            // nric of user
            const nric = req.body.nric;

            // date of birth of user
            const dob = req.body.dob;

            // fullname of user
            const fullname = req.body.fullname;

            // contact number of user
            const contact_num = req.body.contact_num;

            // email of user
            const email = req.body.email;

            // call the db method to add user to database

        });

        // API endpoint to view all users
        app.get("/api/users/", function(req, res) {
            // call the db method to view all users in database
        });

        // API endpoint to view user by id
        app.get("/api/users/:user_id/", function(req, res) {
            // user id
            const user_id = req.params.user_id;

            // call the db method to view user by id in database
        });

        // API endpoint to view users (participants) of a specific event
        app.get("/api/events/:event_id/users/", function(req, res) {
            // event id
            const event_id = req.params.event_id;

            // call the db method to get all users of the specified event
            
        });
    }
}

module.exports = userController;