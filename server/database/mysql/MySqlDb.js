const InstrumentsDataManager = require("../InstrumentsDataManager");
const mysql = require('mysql');
const fs = require("fs");
const JsonInstrumentsData = require("../Json/JsonInstrumentsData");
const { resolve } = require("path");

const sqlCommands = fs.readFileSync('./server/database/mysql/MockDB.sql', 'utf8');
const config = require('../../../src/config/config');

let con = mysql.createConnection({
    host: config.db.host,
    user: config.db.username,
    password: config.db.password,
    database: config.db.database,
    multipleStatements: true
  });


  module.exports = class MySqlDb extends InstrumentsDataManager {
    constructor() {
        super();
        this.initialDB();

    }

    initialDB() {
        console.log("Trying to Connect MySQL");
        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
        });
    }

    getAll() {
        return new Promise(function(resolve,rej) {
         con.query('SELECT * from instrument', function (err, result) {
            if (err) {
                console.log(err);
                resolve([]);
            } else {
                resolve(JSON.parse(JSON.stringify(result)));
            }
        })});
    }

    delete(entityId) {
        var deleteSql = "DELETE FROM instrument WHERE instrumentId = " + entityId;
        return new Promise(function(resolve,rej) {
            con.query(deleteSql, function (err, result) {
                if (err || result.affectedRows == 0) {
                    console.log(err);
                    resolve(false);
                } else {
                    resolve(true);          
                };
          })});
    }

    create(newEntity) {   
        var insertSql = "INSERT INTO instrument (instrumentId, name, symbol, instrumentType) VALUES (" + newEntity.instrumentId 
        + " , '"+ newEntity.name 
        + "', '" + newEntity.symbol 
        + "', '" + newEntity.instrumentType + "')";

        return new Promise(function(resolve,rej) {
            
        con.query(insertSql, function (err, result) {
            if (err) {
                console.log(err);
                resolve(null);
            } else {
                resolve(newEntity);
            }
        })});
    }
}