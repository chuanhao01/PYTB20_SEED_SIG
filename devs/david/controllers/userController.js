/**
 * File: userController.js
 * -----------------------
 * Controller for handling APIs pertaining to the user
 */

// Import libraries that are required
// const utils = require("../utils/index");
const utils = require("../../../main/client_back_end/utils/index");

// Import the model needed for CRUD of DB
// const model = require("../db/index");
// const model = require("../../../main/client_back_end/db/index");
const model = require("../../chuanhao/src/db/index");

// user controller object
const userController = {
    init(app) {
        // place all the endpoints here...
        // e.g: app.get ("/api/...", function(req, res) {});

        // API endpoint to create new account
        app.post("/api/users", function (req, res) {
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

            // REMEMBER TO MAKE ALL STRINGS TO LOWERCASE

            console.log(nric, dob, fullname, contact_num, email, PDPA);

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
                        // Generates the token based on the id
                        return utils.jwtToken.createToken(user_id)
                            .catch(
                                function (err) {
                                    console.log(err);
                                    res.status(500).send(
                                        {
                                            "Error": "Internal Server Error"
                                        }
                                    );
                                }
                            );
                    }
                )
                .then(
                    function (jwt_token) {
                        // Send the token to the email with a link
                        return utils.email.send(email, `http://localhost:8081/api/login/${jwt_token}`)
                            .catch(
                                function (err) {
                                    console.log(err);
                                    res.status(500).send(
                                        {
                                            "Error": "Internal Server Error"
                                        }
                                    );
                                }
                            );
                    }
                )
                .then(
                    function () {
                        res.status(201).send();
                    }
                )
                .catch(
                    function (err) {
                        console.log(err);
                    }
                );


        });

        // API endpoint to login and create the cookie and redirect
        app.get("/api/login/:token", function (req, res) {
            // this is to mainly set up the cookie in the browser
            const token = req.params.token;
            return new Promise((resolve) => {
                // Checks the token
                resolve(
                    utils.jwtToken.refreshToken(token)
                        .catch(
                            function (err) {
                                console.log(err);
                                // Add in redirect PLEASE HEREREREREEREREREREERERERERERERERE
                                // res.status(500).redirect('');
                                res.status(500).send();
                            }
                        )
                );
            })
                .then(
                    function (new_token) {
                        // Token was valid and new_token was generated
                        // redirect her alsoasdadasdasdasdasdasdadasdasdasda
                        res.status(302).cookie("token", new_token, { httpOnly: true }).redirect("http://localhost:8080");
                        // res.status(302).cookie("token", new_token, { httpOnly: true }).send();
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
                    function (emailExists) {
                        // Logic flow based on if email exists
                        return new Promise((resolve, reject) => {
                            if (emailExists) {
                                // email exists and the user can login
                                resolve(true);
                            }
                            else {
                                reject('User email does not exists');
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
                        // Get the user_id by email
                        return model.users.getUserIdByEmail(email)
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
                        // We got the user_id by email, parse cause mysql gives in arr
                        const user_id = user[0].user_id;
                        // Send the email with link here
                        return utils.jwtToken.createToken(user_id)
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
                    function (token) {
                        // Token generation is successful
                        return utils.email.send(email, `http://localhost:8081/api/login/${token}`)
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

        // API endpoint to view users (participants) of a specific event (SHIFT THIS TO SIGNUP CONTROLLER)
        app.get("/api/events/:event_id/users", function (req, res) {
            // event id
            const event_id = req.params.event_id;

            // call the db method to get all users of the specified event
            res.status(200).send({
                "event_id": event_id
            });

        });

        // API endpoint to update user by id
        /**
         * @todo Need to remove checking if user exists (only needed for admin part)
         */
        app.put("/api/users/u", function (req, res) {
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
                    // need to check if user exist before we can be certain to update user profile
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
                )
            })
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
                            )
                    }
                )
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
    }
}

module.exports = userController;