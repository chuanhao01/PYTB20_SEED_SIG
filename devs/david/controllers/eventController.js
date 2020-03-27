/**
 * File: eventController.js
 * -----------------------
 * Controller for handling APIs pertaining to the events
 */

// Import libraries that are required
const utils = require("../../chuanhao/src/utils/index.js");

// Import the model needed for CRUD of DB
const model = require("../../chuanhao/src/db/index.js");

// event controller object
const eventController = {
    init(app) {
        // place all the endpoints here...
        // e.g: app.get ("/api/...", function(req, res) {});

        // API endpoint to create new event
        app.post("/api/events/", function (req, res) {
            // get all of the required fields to add new event

            // call the db method to add user to database
        });

        // API endpoint to view all events
        app.get("/api/events/", function (req, res) {
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
                )
            })
                .then(
                    function (allEventData) {
                        res.status(200).send(allEventData);
                    }
                )
                .catch(
                    function(err) {
                        console.log(err);
                    }
                )

        });

        // API endpoint to view events by id
        app.get("/api/events/:event_id/", function (req, res) {
            const event_id = req.params.event_id;
            // call the db method to view events by id
        });

        // API endpoint to view current events user has signed up for
        app.get("/api/events/u/", function (req, res) {
            // call the db method to view events of user
        });

        // API endpoint to view current events the user HAS NOT signed up for
        app.get("/api/events/u/", function (req, res) {
            // call the db method to view events user HAS NOT signed up for
        });


    }
}

module.exports = eventController;