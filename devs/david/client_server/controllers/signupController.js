/**
 * File: signupController.js
 * -----------------------
 * Controller for handling APIs pertaining to the signups (for events)
 */

// Import libraries that are required
// const utils = require("../utils/index");
const utils = require("../../../../main/client_back_end/utils/index");
const { body, param, validationResult } = require("express-validator");
const sanitizeHtml = require("sanitize-html");

// Import the model needed for CRUD of DB
// const model = require("../db/index");
// const model = require("../../../main/client_back_end/db/index");
const model = require("../../../chuanhao/src/db/index");

// signup controller object
const signupController = {
    init(app) {
        // place all the endpoints here...
        // e.g: app.get ("/api/...", function(req, res) {});
        /**
         * @todo 
         * model.signups.createSignup
         * Need to check if event is open
         * Need to check if user HAS NOT signed up for event
         * Then create signup
         * 
         * model.signups.deleteUserSignUpForEvent
         * Need to check if event is open
         * Need to check if user HAS signed up for event
         * Then leave signup
         * 
         * model.signups.getAllSignUpsForEventByEventId
         * Need to check if event exists first
         * 
         * model.signups.getSignupInfoBySignupId
         * 
         * model.signups.updateSignupDataBySignupId
         */

        // API endpoint to sign up for an event
        app.post("/api/events/:event_id/signups",
            [
                param("event_id")
                    .customSanitizer(value => {
                        return sanitizeHtml(value, {
                            allowedTags: [],
                            allowedAttributes: {}
                        });
                    })
                    .isUUID()
                    .withMessage("Invalid UUID"),
            ],
            function (req, res) {
                // do the validation
                const validationErrors = validationResult(req);
                // if validation contains any errors, 
                // throw error to stop it from doing model calls
                if (!validationErrors.isEmpty()) {
                    console.log(validationErrors);
                    res.status(422).send(
                        {
                            "Error": "Unprocessable Entity"
                        }
                    );
                    throw validationErrors;
                }
                // if validation / sanitization has no errors, start promise chain
                // get all of the required fields to sign up for event
                const event_id = req.params.event_id;

                const user_id = req.user.user_id;

                new Promise((resolve) => {
                    // Need to check if event is open
                    resolve(
                        model.events.checkEventIsOpen(event_id)
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
                        function (eventIsOpen) {
                            return new Promise((resolve, reject) => {
                                if (eventIsOpen) {
                                    resolve(true);
                                } else {
                                    reject("Event is not open");
                                }
                            })
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
                        }

                    )
                    .then(
                        // Need to check if user HAS NOT signed up for event
                        function () {
                            return model.events.checkUserSignUpEvent(event_id, user_id)
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
                        }
                    )
                    .then(
                        function (userSignedUp) {
                            return new Promise((resolve, reject) => {
                                if (!userSignedUp) {
                                    resolve(true);
                                } else {
                                    reject("User has already signed up for event");
                                }
                            })
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
                        }
                    )
                    .then(
                        // call the db method to sign user up for event
                        function () {
                            return model.signups.createSignup(event_id, user_id)
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
                        }

                    )
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
        app.delete("/api/events/:event_id/signups",
            [
                param("event_id")
                    .customSanitizer(value => {
                        return sanitizeHtml(value, {
                            allowedTags: [],
                            allowedAttributes: {}
                        });
                    })
                    .isUUID()
                    .withMessage("Invalid UUID"),
            ],
            function (req, res) {
                // do the validation
                const validationErrors = validationResult(req);
                // if validation contains any errors, 
                // throw error to stop it from doing model calls
                if (!validationErrors.isEmpty()) {
                    console.log(validationErrors);
                    res.status(422).send(
                        {
                            "Error": "Unprocessable Entity"
                        }
                    );
                    throw validationErrors;
                }
                // if validation / sanitization has no errors, start promise chain
                // get all of the required fields to sign up for event
                const event_id = req.params.event_id;

                const user_id = req.user.user_id;

                new Promise((resolve) => {
                    // Need to check if event is open
                    resolve(
                        model.events.checkEventIsOpen(event_id)
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
                        function (eventIsOpen) {
                            return new Promise((resolve, reject) => {
                                if (eventIsOpen) {
                                    resolve(true);
                                } else {
                                    reject("Event is not open");
                                }
                            })
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
                        }

                    )
                    .then(
                        // Need to check if user HAS signed up for event
                        function () {
                            return model.events.checkUserSignUpEvent(event_id, user_id)
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
                        }
                    )
                    .then(
                        function (userSignedUp) {
                            return new Promise((resolve, reject) => {
                                if (userSignedUp) {
                                    resolve(true);
                                } else {
                                    reject("User has not signed up for event");
                                }
                            })
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
                        }
                    )
                    .then(
                        // call the db method to "delete" user from event only if user signed up
                        function () {
                            return model.signups.deleteUserSignUpForEvent(event_id, user_id)
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
                        }

                    )
                    .then(
                        function () {
                            res.status(204).send();
                        }

                    )
                    .catch(
                        function (err) {
                            console.log(err);
                        }
                    );

            });

    }
};

module.exports = signupController;