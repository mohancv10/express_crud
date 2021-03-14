'use strict';

const mysql = require("mysql");

const dbconn =  mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "express"
});

dbconn.connect((err)=>{
    if(err) throw err;

    console.log("Connection made successfully");
});

module.exports = dbconn;