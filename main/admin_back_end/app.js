/**
 * File: app.js
 * --------------
 * File for the main express app
 */

// Init express app
const express = require("express");
const app = express();

// Enable cors
const cors = require('cors');
app.use(cors({
    credentials: true,
}));

// Init middlewares (not custom)
// Setting up body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Init the API controllers
const controllers = require("./controllers/index.js");
controllers.init(app);

// Set the app to listen on port 8080
const PORT = 9000;
app.listen(PORT, function () {
    console.log(`Admin Back End Server listening at port ${PORT}`);
});
