/**
 * File: eventController.js
 * -----------------------
 * Controller for handling APIs pertaining to the events
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
        // API endpoint to create new event (ADMIN)
        app.post("/api/events",
            [
                body("title")
                    .customSanitizer(value => {
                        return sanitizeHtml(value, {
                            allowedTags: [],
                            allowedAttributes: {}
                        });
                    })
                    .trim().not().isEmpty()
                    .withMessage("Title is empty"),
                body("description")
                    .customSanitizer(value => {
                        return sanitizeHtml(value, {
                            allowedTags: [],
                            allowedAttributes: {}
                        });
                    })
                    .trim().not().isEmpty()
                    .withMessage("Description is empty"),
                body("event_date")
                    .customSanitizer(value => {
                        return sanitizeHtml(value, {
                            allowedTags: [],
                            allowedAttributes: {}
                        });
                    })
                    .isISO8601()
                    .withMessage("Date is not in YYYY-MM-DD ISO8601 format"),
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
                // get all of the required fields to add new event

                // title of event
                const title = req.body.title.toLowerCase();

                // description of event
                const description = req.body.description.toLowerCase();

                // date of event (date format)
                const event_date = utils.parseTime.convertTimeStamp(req.body.event_date);

                // call the db method to create event
                return new Promise((resolve) => {
                    resolve(
                        model.events.createNewEvent(title, description, event_date)
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
                        function (event_id) {
                            res.status(201).send(
                                {
                                    "event_id": event_id
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

        // API endpoint to view all events (ADMIN)
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

        // API endpoint to view events by id (ADMIN)
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

        // API endpoint to to update an event
        app.put("/api/events/:event_id",
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
                body("title")
                    .customSanitizer(value => {
                        return sanitizeHtml(value, {
                            allowedTags: [],
                            allowedAttributes: {}
                        });
                    })
                    .trim().not().isEmpty()
                    .withMessage("Title is empty"),
                body("description")
                    .customSanitizer(value => {
                        return sanitizeHtml(value, {
                            allowedTags: [],
                            allowedAttributes: {}
                        });
                    })
                    .trim().not().isEmpty()
                    .withMessage("Description is empty"),
                body("event_date")
                    .customSanitizer(value => {
                        return sanitizeHtml(value, {
                            allowedTags: [],
                            allowedAttributes: {}
                        });
                    })
                    .isISO8601()
                    .withMessage("Date is not in YYYY-MM-DD ISO8601 format"),
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
                // event id
                const event_id = req.params.event_id;

                // title of event
                const title = req.body.title.toLowerCase();

                // description of event
                const description = req.body.description.toLowerCase();

                // date of event (date format)
                const event_date = utils.parseTime.convertTimeStamp(req.body.event_date);

                // status of the event
                const status = parseInt(req.body.status);

                // check if the event exists first, 
                // then update event
                return new Promise((resolve) => {
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
                    .then(
                        function () {
                            return model.events.updateEventDataByEventId(event_id, title, description, event_date, status)
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

        // API endpoint for closing event
        app.post("/api/events/:event_id",
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
                // event id
                const event_id = req.params.event_id;
                // need to check if event is open
                new Promise((resolve) => {
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
                    );
                })
                    // if event is open, resolve
                    // if not, reject
                    .then(
                        function (eventIsOpen) {
                            return new Promise((resolve, reject) => {
                                if (eventIsOpen) {
                                    resolve(true);
                                } else {
                                    reject("Event is already close");
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
                        function () {
                            return model.events.closeEventAndSignups(event_id)
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

module.exports = eventController;