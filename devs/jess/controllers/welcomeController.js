const mysql = require("mysql");
const sql = require("./sql");
const bodyParser = require("body-parser");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieMonster = require("./cookieMonster");
const cookieParser = require("cookie-parser")
const mailer = require("./email");

const connection = mysql.createPool({
    host: "localhost",
    user: "pikachu",
    password: "password",
    database: "random"
});

const urlencodedParser = bodyParser.urlencoded({ extended: false });


const linkCreator = (res,email,token)=>{
    // link for user to login
    const link = "https://localhost:4444/login/" + token;
    mailer.send(email, link, err => {
        if (err) { res.status(403).send(err); }
        else { res.status(201).send("success!"); }
    });
}
module.exports = app => {
    app.get("/", (req, res) => {
        try {
            const token = req.cookies.token // Check whether cookies exists for user
            if (token != undefined) {
                cookieMonster.validateToken(token, (err, newToken, decoded) => {
                    if (err) { res.status(302).redirect("/"); }
                    else {
                        if (newToken) {
                            // refreshes the cookie
                            res.status(201).clearCookie("token").cookie("token", newToken, { httpOnly: true }).sendFile(path.resolve(__dirname + "/../html/hello.html"));

                        }
                        else {
                            res.status(201).sendFile(path.resolve(__dirname + "/../html/hello.html"));
                        }
                    }


                })

            }
            else {
                res.sendFile(path.resolve(__dirname + "/../html/welcome.html"));
            }
        } catch (error) {
            res.sendFile(path.resolve(__dirname + "/../html/welcome.html"));
        }
    })
    app.post("/register", urlencodedParser, (req, res) => {
        var data = req.body;
        var email = data.email;
        sql.register(email, (err, token) => {
            if (err) {
                if (err != "Email exists!") {
                    res.status(500).send("Server error");
                }
                else {
                    res.status(403).send(err);
                }
            }
            else {
                linkCreator(res,email,token);
            }
        })

    });

    app.post("/login", urlencodedParser, (req, res) => {
        var data = req.body;
        sql.login(data.email, (err, token) => {
            if (err) {
                if (err == "Email does not exist!") {
                    res.status(403).send(err)
                }
                else { res.status(500).send("Server error"); }
            }
            else {
                linkCreator(res,email,token);
            }

        })

    })
    app.get("/login/:token", urlencodedParser, (req, res) => {
        const token = req.params.token;
        cookieMonster.validateToken(token, (err, newToken, decoded) => {
            if (err) { res.status(302).redirect("/"); }
            else {
                res.status(302).cookie("token", token, { httpOnly: true }).redirect("/hello");
            }
        })
    })
    app.get("/hello", (req, res) => {
        // testing "protected site"
        const token = req.cookies.token;
        if (token == undefined) {
            res.status(302).redirect("/");
        }
        else {
            cookieMonster.validateToken(token, (err, newToken, decoded) => {
                if (err) { res.status(302).redirect("/"); }
                else {
                    if (newToken) {
                        res.status(201).clearCookie("token").cookie("token", newToken, { httpOnly: true }).sendFile(path.resolve(__dirname + "/../html/hello.html"));

                    }
                    else {
                        res.status(201).sendFile(path.resolve(__dirname + "/../html/hello.html"));
                    }
                }


            })


        }
    })
}
