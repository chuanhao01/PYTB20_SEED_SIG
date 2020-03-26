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
});

// Importing the other db files here
const usersdb = require('./usersdb');
const eventsdb = require('./eventsdb');
usersdb.init(pool);
eventsdb.init(pool);

// Main object being exported, you will mainly be accessing the db functions through this object
const db = {
    users: usersdb,
    events: eventsdb,
};

module.exports = db;
