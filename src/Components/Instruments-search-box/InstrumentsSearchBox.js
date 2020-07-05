import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

import "./InstrumentsSearchBox.css"

export default class InstrumentsSearchBox extends React.Component {
    static propTypes = {
        textChange: PropTypes.func
      };

      handleChange = event => {
        this.props.textChange(event);
      };
    
      render() {
        return (
            <Form.Control size="lg" type="text" placeholder="Search Instrument" onChange={this.handleChange}/>
        );
      }
}