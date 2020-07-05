const config = require('../config/config');

const instrumentsApi = require('../Api/InstrumentsApi');

const filterInstrument = async (searchText, maxResults) => {
    var allInstruments= await gelAllInstruments();
  return allInstruments
      .filter(insrument => {
        if (insrument.name.toLowerCase().includes(searchText.toLowerCase())) {
          return true;
        }
        return false;
      })
      .slice(0, maxResults); 
}

const gelAllInstruments = async () => {
    return instrumentsApi.getInstruments(config.serverUrl + "instruments"); 
}

const deleteInstrument = async (id) => {
  return instrumentsApi.deleteInstrument(config.serverUrl + "instruments/" + id); 
}

const createInstrument = async (instrument) => {
  return instrumentsApi.postInstrument(config.serverUrl + "instruments/", instrument); 
}

module.exports = {
    filterInstrument : filterInstrument,
    gelAllInstruments : gelAllInstruments,
    deleteInstrument : deleteInstrument,
    createInstrument: createInstrument
}
