// Main entry point for getting access to the database

// Importing mysql lib and setting up the pool obj
const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    port: 3306,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: 'PYTB_SEED_SIG',
    insecureAuth: true,
});

// Importing the other db files here
const usersdb = require('./usersdb');
const eventsdb = require('./eventsdb');
const signupsdb = require('./signupsdb');
usersdb.init(pool);
eventsdb.init(pool);
signupsdb.init(pool);

// Main object being exported, you will mainly be accessing the db functions through this object
const dataAccess = {
    users: usersdb,
    events: eventsdb,
    signups: signupsdb,
};

module.exports = dataAccess;
