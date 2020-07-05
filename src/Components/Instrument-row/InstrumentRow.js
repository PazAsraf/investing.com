import React from "react";
import PropTypes from "prop-types";
import './InstrumentRow.css';

export default class InstrumentRow extends React.Component {
  static propTypes = {
    
    id: PropTypes.number,
    name: PropTypes.string,
    symbol: PropTypes.string,
    type: PropTypes.string,
    deleteInstrument: PropTypes.func
  };

  delete = () => {
    this.props.deleteInstrument(this.props.id);
  };

  render() {
    return (
    <tr>
      <th className="title">{this.props.name}</th>
      <th className="symbol">{this.props.symbol}</th>
      <th className="type">{this.props.type}</th>
      <th className="delete"><button type="button" className="btn btn-outline-danger" onClick={this.delete}>Delete</button></th>
    </tr>
    );
  }
}