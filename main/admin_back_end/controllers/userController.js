/**
 * File: userController.js
 * -----------------------
 * Controller for handling APIs pertaining to the user
 */

// Import libraries that are required
// const utils = require("../utils/index");
const utils = require("../utils/index");
const { body, param, validationResult } = require("express-validator");
const sanitizeHtml = require("sanitize-html");

// Import the model needed for CRUD of DB
const model = require("../db/index");

// user controller object
const userController = {
    init(app) {
        // place all the endpoints here...
        // e.g: app.get ("/api/...", function(req, res) {});

        // API endpoint to view user by id (ADMIN)
        app.get("/api/users/:user_id",
            [
                param("user_id")
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
                // user id
                const user_id = req.params.user_id;

                // need to check if user exists first
                return new Promise((resolve) => {
                    resolve(
                        model.users.checkIfUserExistsByUserId(user_id)
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
                    // if user exists, resolve
                    // if not, reject
                    .then(
                        function (userExists) {
                            return new Promise((resolve, reject) => {
                                if (userExists) {
                                    resolve(true);
                                } else {
                                    reject("User does not exist");
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
                    // call the db method to view user by id in database
                    .then(
                        function () {
                            return model.users.getUserDataByUserId(user_id)
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
                        function (userData) {
                            return new Promise((resolve, reject) => {
                                if (userData.length == 1) {
                                    resolve(userData[0]);
                                } else {
                                    reject("Unexpected user");

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
                        function (user) {
                            // if request successful, send the user data
                            res.status(200).send(user);
                        }
                    )
                    .catch(
                        function (err) {
                            console.log(err);
                        }
                    );
            });

        // API endpoint to update user by id (ADMIN)
        app.put("/api/users/:user_id",
            // always sanitise inputs to remove all tags if present (XSS Prevention)
            [
                param("user_id")
                    .customSanitizer(value => {
                        return sanitizeHtml(value, {
                            allowedTags: [],
                            allowedAttributes: {}
                        });
                    })
                    .isUUID()
                    .withMessage("Invalid UUID"),
                body("nric")
                    .customSanitizer(value => {
                        return sanitizeHtml(value, {
                            allowedTags: [],
                            allowedAttributes: {}
                        });
                    })
                    .custom(value => {
                        return /^[sftg]\d{7}[a-z]|^[SFTG]\d{7}[A-Z]/.test(value);
                    })
                    .withMessage("NRIC is not in correct format"),
                body("dob")
                    .customSanitizer(value => {
                        return sanitizeHtml(value, {
                            allowedTags: [],
                            allowedAttributes: {}
                        });
                    })
                    .isISO8601()
                    .withMessage("Date is not in YYYY-MM-DD ISO8601 format"),
                body("fullname")
                    .customSanitizer(value => {
                        return sanitizeHtml(value, {
                            allowedTags: [],
                            allowedAttributes: {}
                        });
                    })
                    .trim().not().isEmpty()
                    .withMessage("Name is empty"),
                body("contact_num")
                    .customSanitizer(value => {
                        return sanitizeHtml(value, {
                            allowedTags: [],
                            allowedAttributes: {}
                        });
                    })
                    .isMobilePhone("en-SG", { strictMode: true })
                    .withMessage("Mobile number is not of correct SG format"),
                body("email")
                    .customSanitizer(value => {
                        return sanitizeHtml(value, {
                            allowedTags: [],
                            allowedAttributes: {}
                        });
                    })
                    .isEmail()
                    .withMessage("Email is not in correct format"),
                body("PDPA")
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
                    .withMessage("PDPA is not a integer of either 0 or 1"),
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
                // user id
                const user_id = req.params.user_id;

                // nric of user
                const nric = req.body.nric.toLowerCase();

                // date of birth of user (date format)
                const dob = utils.parseTime.convertTimeStamp(req.body.dob);

                // fullname of user
                const fullname = req.body.fullname.toLowerCase();

                // contact number of user
                const contact_num = req.body.contact_num;

                // email of user
                const email = req.body.email.toLowerCase();

                // PDPA
                const PDPA = parseInt(req.body.PDPA);

                // need to check if user exists first
                return new Promise((resolve) => {
                    resolve(
                        model.users.checkIfUserExistsByUserId(user_id)
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
                    // if user exists, resolve
                    // if not, reject
                    .then(
                        function (userExists) {
                            return new Promise((resolve, reject) => {
                                if (userExists) {
                                    resolve(true);
                                } else {
                                    reject("User does not exist");
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
                    // call the db method to update user by id in database
                    .then(
                        function () {
                            return model.users.updateUserInfoByUserId(user_id, nric, dob, fullname, contact_num, email, PDPA)
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

module.exports = userController;