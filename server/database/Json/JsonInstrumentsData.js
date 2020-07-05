const InstrumentsDataManager = require("../InstrumentsDataManager");
const fs = require("fs");

const dataFile = "./instrumentsList.json";

const readFile = () => {
    return JSON.parse(fs.readFileSync(dataFile)); 
  };

const writeFile = (
    fileData
  ) => {
    fs.writeFileSync(dataFile, JSON.stringify(fileData, null, 2), "utf8",);
  };

let data = [];

module.exports = class JsonInstrumentsData extends InstrumentsDataManager {
    constructor() {
        super();
    }

    getAll() {
        try {
            data = readFile();
        } catch (ex) {
            data = [];
        }

        return data;
    }

    delete(entityId) {
        if (data.length == 0) {
            data = readFile();
        }

        data.splice(data.findIndex(instrument => instrument.id == entityId),1);

        try {
            writeFile(data);

             return true;
       } catch (ex) {
           return false;
       }
    }

    create(newEntity) {   
        
        if (data.length == 0) {
            data = readFile();
        }

        data.push(newEntity);

        try {
             writeFile(data);

              return newEntity;
        } catch (ex) {
            return null;
        }
    }
}