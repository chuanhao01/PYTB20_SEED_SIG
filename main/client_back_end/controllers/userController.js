/**
 * File: userController.js
 * -----------------------
 * Controller for handling APIs pertaining to the user
 */

// Import libraries that are required
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

        // API endpoint to create new account
        app.post("/api/users/",
            [
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

                //PDPA
                const PDPA = parseInt(req.body.pdpa);

                // REMEMBER TO MAKE ALL STRINGS TO LOWERCASE

                console.log(nric, dob, fullname, contact_num, email);

                // call the db method to add user to database
                new Promise((resolve) => {
                    resolve(
                        // first need to see if email already exists
                        model.users.checkUserEmail(email)
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
                        // this function takes in the bool from check user email
                        function (emailExists) {
                            return new Promise((resolve, reject) => {
                                if (!emailExists) {
                                    resolve(true);
                                }
                                reject("Email already exists");
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
                            return model.users.createNewUser(nric, dob, fullname, contact_num, email, PDPA)
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
                        function (user_id) {
                            // Gen the refresh_token and create it in the database
                            return model.accounts.createRefreshToken(user_id)
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
                        function (refresh_token) {
                            // Send the token to the email with a link
                            return utils.email.send(email, `http://localhost:8081/api/refresh_token/${refresh_token}`)
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
                            res.status(200).send();
                        }
                    )
                    .catch(
                        function (err) {
                            console.log(err);
                        }
                    );
            });

        // API endpoint to login using email
        app.post("/api/login", function (req, res) {
            const email = req.body.email.toLowerCase();
            return new Promise((resolve) => {
                resolve(
                    // Checking the email if it has a refresh token and at the same time getting it
                    model.accounts.getRefreshTokenByUserEmail(email)
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
                    function (refresh_token_data) {
                        return new Promise((resolve, reject) => {
                            if (refresh_token_data.length == 1) {
                                // There is only one user there exists with the email and it has a refresh token
                                resolve(refresh_token_data[0].refresh_token);
                            }
                            else {
                                // If the refresh_token does not exists or somehow 2 datapoints are returned
                                reject('Email refresh token error');
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
                    function (refresh_token) {
                        // Token generation is successful
                        return utils.email.send(email, `http://localhost:8081/api/refresh_token/${refresh_token}`)
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
                        // Successful in sending the emails
                        res.status(200).send();
                    }
                )
                .catch(
                    function (err) {
                        console.log(err);
                    }
                );
        });

        // API endpoint to login and create the cookie and redirect
        // If it fails, redirects to logout
        app.get("/api/refresh_token/:refresh_token",
            [
                body("email")
                    // always sanitise inputs to remove all tags if present (XSS Prevention)
                    .customSanitizer(value => {
                        return sanitizeHtml(value, {
                            allowedTags: [],
                            allowedAttributes: {}
                        });
                    })
                    .isEmail()
                    .withMessage("Email is not in correct format"),
            ],
            function (req, res) {
                // this is to mainly set up the cookie in the browser
                const refresh_token = req.params.refresh_token;
                return new Promise((resolve) => {
                    // Checks get the refresh_token data from the db, also checks if the refresh token exists
                    resolve(
                        model.accounts.getUserByRefreshToken(refresh_token)
                            .catch(
                                function (err) {
                                    console.log(err);
                                    res.status(500).redirect('/api/logout');
                                    throw err;
                                }
                            )
                    );
                })
                    .then(
                        function (refresh_data) {
                            // Checking if the refresh_token is correct
                            return new Promise((resolve, reject) => {
                                if (refresh_data.length == 1) {
                                    // The user with the refresh token exists
                                    resolve(refresh_data[0]);
                                }
                                else {
                                    reject('Refresh token is not valid');
                                }
                            })
                                .catch(
                                    function (err) {
                                        console.log(err);
                                        res.status(500).redirect('/api/logout');
                                        throw err;
                                    }
                                );
                        }
                    )
                    .then(
                        function (user) {
                            return utils.jwtToken.createAccessToken(user.user_id)
                                .catch(
                                    function (err) {
                                        console.log(err);
                                        res.status(500).redirect('/api/logout');
                                        throw err;
                                    }
                                );
                        }
                    )
                    .then(
                        function (access_token) {
                            // Token was valid and new_token was generated
                            // redirect her alsoasdadasdasdasdasdasdadasdasdasda
                            // res.status(302).cookie("token", new_token, { httpOnly: true }).redirect("http://localhost:8080");
                            res
                                .status(302)
                                .cookie("access_token", access_token, { httpOnly: true })
                                .cookie('refresh_token', refresh_token, { httpOnly: true })
                                .send();
                        }
                    )
                    .catch(
                        function (err) {
                            console.log(err);
                        }
                    );
            });

        // Adding in logout endpotin
        app.get('/api/logout', function (req, res) {
            res
                .clearCookie('access_token')
                .clearCookie('refresh_token')
                .send();
        });

        // API endpoint to view user by id
        app.get("/api/users/u", function (req, res) {
            // user id
            const user_id = req.user.user_id;

            // call the db method to view user by id in database
            return new Promise((resolve) => {
                resolve(
                    model.users.getUserDataByUserId(user_id)
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
                )
        });

        // API endpoint to update user by id
        app.put("/api/users/u",
            // always sanitise inputs to remove all tags if present (XSS Prevention)
            [
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
                const user_id = req.user.user_id;

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

                return new Promise((resolve) => {
                    resolve(
                        model.users.updateUserInfoByUserId(user_id, nric, dob, fullname, contact_num, email, PDPA)
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