/**
 * File: signupController.js
 * -----------------------
 * Controller for handling APIs pertaining to the signups (for events)
 */

// Import libraries that are required
const utils = require("../../chuanhao/src/utils/index.js");

// Import the model needed for CRUD of DB
const model = require("../../chuanhao/src/db/index.js");

// signup controller object
const signupController = {
    init(app) {
        // place all the endpoints here...
        // e.g: app.get ("/api/...", function(req, res) {});

        // API endpoint to sign up for an event
        app.post("/api/events/:event_id/signups/", function (req, res) {
            // get all of the required fields to sign up for event
            const event_id = req.params.event_id;

            const user_id = req.cookies.token;

            // call the db method to sign user up for event
            new Promise((resolve) => {
                resolve(
                    model.signups.createSignup(event_id, user_id)
                        .catch(
                            function (err) {
                                console.log(err);
                                res.status(500).send(
                                    {
                                        "Error": "Internal Server Error"
                                    }
                                );
                                throw err;

                            }
                        )
                )
            })
                .then(
                    function (signup_id) {
                        res.status(200).send(
                            {
                                "signup_id": signup_id
                            }
                        );
                    }
                )
                .catch(
                    function (err) {
                        console.log(err);
                    }
                )
        });

        // API endpoint to leave an event
        app.delete("/api/events/event_id/signups/", function (req, res) {
            // call the db method to "delete" user from event
        });

        // API endpoint to view current events user has signed up for
        app.get("/api/events/u/", function (req, res) {
            // call the db method to view events of user
            // model.signups.getEventsUserSignUp()
        });

        // API endpoint to view current events the user HAS NOT signed up for
        app.get("/api/events/u/", function (req, res) {
            // call the db method to view events user HAS NOT signed up for
        });

        // API endpoint to take attendance

    }
}

module.exports = signupController;