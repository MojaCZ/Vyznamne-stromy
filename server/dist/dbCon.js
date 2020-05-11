"use strict";
var mysql = require("mysql");
// move this to .env
var con = mysql.createConnection({
    host: "176.222.224.212",
    user: "moja",
    password: "4Th,u8U(*]ygE~7G",
    database: "stromy"
});
con.connect(function (err) {
    if (err)
        throw err;
    console.log("Connected!");
});
module.exports = con;
