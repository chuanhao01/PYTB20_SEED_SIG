/**
 * File: eventController.js
 * -----------------------
 * Controller for handling APIs pertaining to the events (client side)
 */

// Import libraries that are required
// const utils = require("../utils/index");
const utils = require("../utils/index");
const { body, param, validationResult } = require("express-validator");
const sanitizeHtml = require("sanitize-html");

// Import the model needed for CRUD of DB
const model = require("../db/index");

// event controller object
const eventController = {
    init(app) {
        // place all the endpoints here...
        // e.g: app.get ("/api/...", function(req, res) {});
        /**
         * @todo 
         * 
         * model.events.checkEventIsOpen
         * model.events.checkIfEventExist
         * model.events.checkUserSignUpEvent
         * model.events.checkUserSignUpParticipatedEvent
         * 
         * 
         * model.events.closeEventAndSignups (DONE)
         * Check if event is open
         * 
         * model.events.createNewEvent(DONE)
         * 
         * model.events.getAllEvents(DONE)
         * 
         * model.events.getEventDataByEventId (DONE)
         * Check if event exists
         * Check if it only returns one event
         * 
         * model.events.getEventsUserHasNotSignUp (DONE)
         * 
         * model.events.getEventsUserParticipated (DONE)
         * 
         * model.events.getEventsUserSignUp (DONE)
         * 
         * model.events.updateEventDataByEventId (DONE)
         * Check if event exists
         */

        // API endpoint to view all events
        app.get("/api/events", function (req, res) {
            // call the db method to view all events in database
            new Promise((resolve) => {
                resolve(
                    model.events.getAllEvents()
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
                    function (allEventData) {
                        res.status(200).send(allEventData);
                    }
                )
                .catch(
                    function (err) {
                        console.log(err);
                    }
                );

        });

        // API endpoint to view events by id
        app.get("/api/events/:event_id",
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
                const event_id = req.params.event_id;
                // check if the event exists first
                new Promise((resolve) => {
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
                    );
                })
                    // if event exists, resolve
                    // if not, reject
                    .then(
                        function (eventExists) {
                            return new Promise((resolve, reject) => {
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
                                );
                        }
                    )
                    // if event exists, call the db method to view events by id
                    .then(
                        function () {
                            return model.events.getEventDataByEventId(event_id)
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
                        function (eventData) {
                            return new Promise((resolve, reject) => {
                                if (eventData.length == 1) {
                                    resolve(eventData[0]);
                                } else {
                                    reject("Unexpected event");

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
                        function (event) {
                            res.status(200).send(event);
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
                    model.events.getEventsUserSignUp(user_id)
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
                    function (events) {
                        res.status(200).send(events);
                    }
                )
                .catch(
                    function (err) {
                        console.log(err);
                    }
                );
        });

        // API endpoint to view current events the user HAS NOT signed up for
        app.get("/api/events/not_signed_up/u", function (req, res) {
            // user id
            const user_id = req.user.user_id;

            // call the db method to view events user HAS NOT signed up for
            return new Promise((resolve) => {
                resolve(
                    model.events.getEventsUserHasNotSignUp(user_id)
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
                    function (events) {
                        res.status(200).send(events);
                    }
                )
                .catch(
                    function (err) {
                        console.log(err);
                    }
                );
        });

        // API endpoint to view events user has participated in
        app.get("/api/events/participated/u", function (req, res) {
            // user id
            const user_id = req.user.user_id;

            // call the db method to view events user has participated in
            return new Promise((resolve) => {
                resolve(
                    model.events.getEventsUserParticipated(user_id)
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
                    function (events) {
                        res.status(200).send(events);
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

module.exports = eventController;