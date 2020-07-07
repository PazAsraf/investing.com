const mysql = require('mysql');
const fs = require("fs");

const sqlCommands = fs.readFileSync('./server/database/mysql/MockDB.sql', 'utf8');

const config = require('../../../src/config/config');

let con = mysql.createConnection({
    host: config.db.host,
    user: config.db.username,
    password: config.db.password,
    multipleStatements: true
  });

  
    console.log("Trying to Connect MySQL");
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
            con.query("CREATE DATABASE IF NOT EXISTS protfolioTool", function (err, result) {
                if (err) throw err;
                console.log("Database created");

            });

            con.query(sqlCommands, function (error, results, fields) {
                if (error) 
                {
                    console.log('Table already exist!');
                }
                else {
                    console.log('Table initialized.');
                }
              });
    });
