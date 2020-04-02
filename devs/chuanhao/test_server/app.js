/**
 * File: app.js
 * --------------
 * File for the main express app
 */

// Init express app
const express = require("express");
const app = express();

// Init middlewares (not custom)
// Setting up body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Setting up cookie parser
const cookieParser = require('cookie-parser');
const COOKIE_SECRET = process.env.COOKIE_SECRET;
app.use(cookieParser(COOKIE_SECRET));

// Init custom middlewares
// const middlewares = require('./middlewares/index');
// middlewares.init(app);

// Init the API controllers
const controllers = require("./controllers/index.js");
controllers.init(app);

// Set the app to listen on port 8081
const PORT = 8081;
app.listen(PORT, function () {
    console.log(`Back-End Server listening at port ${PORT}`);
});
