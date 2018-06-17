//Set up MySQL Connection
require('dotenv').config();
var mysql = require("mysql");

var keys = require("./keys");
var fs = require("fs");

var connectionBurger = mysql.createConnection({
    host:"localhost",
    port:3306,
    user: keys.mySQL.user,
    password: keys.mySQL.password,
    database: "burger_db"
});

connectionBurger.connect(function(err) {
    if (err) {
        console.log("Error Connecting: " + err.stack);
        return;
    };
    console.log("Connected to DB as id ",connectionBurger.threadId);
});

module.exports = connectionBurger;