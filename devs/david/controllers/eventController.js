/**
 * File: eventController.js
 * -----------------------
 * Controller for handling APIs pertaining to the events
 */

// Import libraries that are required
// const utils = require("../utils/index");
const utils = require("../../../main/client_back_end/utils/index");

// Import the model needed for CRUD of DB
// const model = require("../db/index");
// const model = require("../../../main/client_back_end/db/index");
const model = require("../../chuanhao/src/db/index");

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
         * model.events.closeEventAndSignups
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
        app.post("/api/events", function (req, res) {
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

                )
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
                )
        });

        // API endpoint to view all events (ADMIN + USER)
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

        // API endpoint to view events by id (ADMIN + USER)
        app.get("/api/events/:event_id", function (req, res) {

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
                )
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
                            )
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
                            )

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
        app.put("/api/events/:event_id", function (req, res) {
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
                )
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
                            )
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
                )

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
    }
};

module.exports = eventController;