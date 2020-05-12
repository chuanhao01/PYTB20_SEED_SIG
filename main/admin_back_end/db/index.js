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
const signupsdb = require('./signupsdb');
const accountsdb = require('./accountsdb');
usersdb.init(pool);
eventsdb.init(pool);
signupsdb.init(pool);
accountsdb.init(pool);

// Main object being exported, you will mainly be accessing the db functions through this object
const dataAccess = {
    users: usersdb,
    events: eventsdb,
    signups: signupsdb,
    accounts: accountsdb,
};

module.exports = dataAccess;
