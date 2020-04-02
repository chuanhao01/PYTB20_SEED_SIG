/**
 * File: signupController.js
 * -----------------------
 * Controller for handling APIs pertaining to the signups (for events)
 */

// Import libraries that are required
// const utils = require("../utils/index");
const utils = require("../../../main/client_back_end/utils/index");

// Import the model needed for CRUD of DB
// const model = require("../db/index");
// const model = require("../../../main/client_back_end/db/index");
const model = require("../../chuanhao/src/db/index");

// signup controller object
const signupController = {
    init(app) {
        // place all the endpoints here...
        // e.g: app.get ("/api/...", function(req, res) {});

        // API endpoint to sign up for an event
        app.post("/api/events/:event_id/signups", function (req, res) {
            // get all of the required fields to sign up for event
            const event_id = req.params.event_id;

            const user_id = req.user.user_id;

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
                );
            })
                .then(
                    function (signup_id) {
                        res.status(201).send(
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
                );
        });

        // API endpoint to leave an event
        app.delete("/api/events/:event_id/signups", function (req, res) {
            // get all of the required fields to sign up for event
            const event_id = req.params.event_id;

            const user_id = req.user.user_id;

            // call the db method to "delete" user from event
            new Promise((resolve) => {
                resolve(
                    model.signups.deleteUserSignUpForEvent(event_id, user_id)
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
                );
            })
                .then(
                    function (signup_id) {
                        res.status(204).send();
                    }
                )
                .catch(
                    function (err) {
                        console.log(err);
                    }
                );
        });

        // API endpoint to view current events user has signed up for
        app.get("/api/events/signed_up/u", function (req, res) {
            // user id
            const user_id = req.user.user_id;

            // call the db method to view events of user
            return new Promise((resolve) => {
                resolve(
                    model.signups.getEventsUserSignUp(user_id)
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
                    function (events) {
                        res.status(200).send(events);
                    }
                )
                .catch(
                    function (err) {
                        console.log(err);
                    }
                )
        });

        // API endpoint to view current events the user HAS NOT signed up for
        app.get("/api/events/not_signed_up/u", function (req, res) {
            // user id
            const user_id = req.user.user_id;

            // call the db method to view events user HAS NOT signed up for
            return new Promise((resolve) => {
                resolve(
                    model.signups.getEventsUserHasNotSignUp(user_id)
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
                    function (events) {
                        res.status(200).send(events);
                    }
                )
                .catch(
                    function (err) {
                        console.log(err);
                    }
                )
        });

        // API endpoint to take attendance

    }
};

module.exports = signupController;