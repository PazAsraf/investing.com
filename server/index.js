const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const jsonDb = require("./database/Json/JsonInstrumentsData");
const MySqlDb = require("./database/mysql/MySqlDb");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(pino);

//const db = new jsonDb();
const db = new MySqlDb();

// routes
const instruments = require('./instruments/instruments.js');
instruments(app,db);

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);