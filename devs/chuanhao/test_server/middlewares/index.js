/**
 * File: index.js
 * --------------------
 * Main file that has all the custom middlewares the server requires
 */

// Import custom middlewares required
const userAuth = require('./userAuth');
const pathAuth = require('./pathAuth');
const setHeaders = require('./setHeaders');

// custom middlewares object
const customMiddlewares = {
    init(app) {
        app.use(setHeaders);
        // app.use(userAuth);
        // app.use(pathAuth);
    },
};

module.exports = customMiddlewares;