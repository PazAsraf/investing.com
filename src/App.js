import React from 'react';

// Style 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Header from './Components/Header/Header';
import AddInstrument from './Components/add-instrument/AddInstrument'
import InstrumentTable from './Components/Instrument-table/InstrumentTable';
import InstrumentsSearchBox from './Components/Instruments-search-box/InstrumentsSearchBox';

// Helpers
import instrumentHandler from "./Handlers/InstrumentsHandler";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredInstruments: [],
      isCollapseVisible: false
    };
    this.getInstruments();
  }

  handleSearchChange = event => {
    var filterInstrumentPromise = instrumentHandler.filterInstrument(event.target.value, 20);

    filterInstrumentPromise.then((res) => {          
      this.setState({
        filteredInstruments: res
      });
    });
  };

  getInstruments = () => {
    var instrumentsPromise = instrumentHandler.gelAllInstruments();
        
    instrumentsPromise.then((res) => {
        this.setState({
        filteredInstruments: res
      });
    });
  };

  deleteInstrument = id => {
    var deleteInstrumentPromise = instrumentHandler.deleteInstrument(id);

    deleteInstrumentPromise.then(() => {          
      this.getInstruments();
    });
  };

  changeCollapseState = () => {
      this.setState(prevState => ({
        isCollapseVisible: !prevState.isCollapseVisible
      }));
    };

  createInstrument = instrument => {
      var createInstrumentPromise = instrumentHandler.createInstrument(instrument);
  
      createInstrumentPromise.then(() => {          
        this.getInstruments();
      });

      this.changeCollapseState();
    };

  render() {
    return (
      <div>
        <Header changeCollapseState={this.changeCollapseState}/>
        <AddInstrument isOpen={this.state.isCollapseVisible} addInstrument={this.createInstrument}/>
        <InstrumentsSearchBox textChange={this.handleSearchChange} /> 
        <InstrumentTable instrumentData={this.state.filteredInstruments} deleteInstrument={this.deleteInstrument} />
      </div>
    );
  }
}