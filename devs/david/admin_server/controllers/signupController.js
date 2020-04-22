/**
 * File: signupController.js
 * -----------------------
 * Controller for handling APIs pertaining to the signups (for events)
 */

// Import libraries that are required
// const utils = require("../utils/index");
const utils = require("../../../main/client_back_end/utils/index");
const { body, param, validationResult } = require("express-validator");
const sanitizeHtml = require("sanitize-html");

// Import the model needed for CRUD of DB
// const model = require("../db/index");
// const model = require("../../../main/client_back_end/db/index");
const model = require("../../chuanhao/src/db/index");

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

        // API endpoint to get all signups for an event (ADMIN)
        app.get("/api/events/:event_id/signups",
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

                new Promise((resolve) => {
                    // Need to check if event exists
                    resolve(
                        model.events.checkIfEventExist(event_id)
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
                        function (eventExists) {
                            new Promise((resolve, reject) => {
                                // if event exists, resolve
                                // if not, reject
                                if (eventExists) {
                                    resolve(true);
                                } else {
                                    reject("Event does not exists");
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
                        function () {
                            return model.signups.getAllSignUpsForEventByEventId(event_id)
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
                        function (signups) {
                            res.status(200).send(signups);
                        }

                    )
                    .catch(
                        function (err) {
                            console.log(err);
                        }
                    );

            });

        // API endpoint to get signup info by signup id
        app.get("/api/signups/:signup_id",
            [
                param("signup_id")
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
                // signup id
                const signup_id = req.params.signup_id;
                return new Promise((resolve) => {
                    resolve(
                        model.signups.getSignupInfoBySignupId(signup_id)
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
                        function (signup) {
                            return new Promise((resolve, reject) => {
                                if (signup.length == 1) {
                                    resolve(signup[0]);
                                } else {
                                    reject("Unexpected signup");

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
                                );
                        }
                    )
                    .then(
                        function (signup) {
                            res.status(200).send(signup);
                        }
                    )
                    .catch(
                        function (err) {
                            console.log(err);
                        }
                    )
            });

        // API endpoint to update signup info by signup id (ADMIN)
        app.put("/api/signups/:signup_id",
            [
                param("signup_id")
                    .customSanitizer(value => {
                        return sanitizeHtml(value, {
                            allowedTags: [],
                            allowedAttributes: {}
                        });
                    })
                    .isUUID()
                    .withMessage("Invalid UUID"),
                body("status")
                    .customSanitizer(value => {
                        return sanitizeHtml(value, {
                            allowedTags: [],
                            allowedAttributes: {}
                        });
                    })
                    .isInt({
                        min: 0,
                        max: 1
                    })
                    .withMessage("Status is not a integer of either 0 or 1"),
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
                // signup id
                const signup_id = req.params.signup_id;

                // status
                const status = parseInt(req.body.status);

                return new Promise((resolve) => {
                    resolve(
                        model.signups.updateSignupDataBySignupId(signup_id, status)
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
                        function () {
                            res.status(204).send();
                        }
                    )
                    .catch(
                        function (err) {
                            console.log(err);
                        }
                    )
            });
    }
};

module.exports = signupController;