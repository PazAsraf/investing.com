import React from "react";
import PropTypes from "prop-types";
import './InstrumentTable.css';
import InstrumentRow from "../Instrument-row/InstrumentRow";
import Table from 'react-bootstrap/Table'

export default class InstrumentTable extends React.Component {
    static propTypes = {
      instrumentData: PropTypes.array,
      deleteInstrument: PropTypes.func
    };

    render() {
      return (
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Instrument Type</th>
            <th>Delete Instrument</th>
          </tr>
        </thead>
        <tbody>
          {this.props.instrumentData.map(instrumentData => (
                  <InstrumentRow
                    key={instrumentData.instrumentId}
                    id={instrumentData.instrumentId}
                    name={instrumentData.name}
                    symbol={instrumentData.symbol}
                    type={instrumentData.instrumentType}
                    deleteInstrument={this.props.deleteInstrument}
                  />
                ))}
        </tbody>
        </Table>
      );
    }
  }