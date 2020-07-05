import React from "react";
import PropTypes from "prop-types";
import './AddInstrument.css';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const INVALID_INSTRUMENT_ID = -999;

export default class AddInstrument extends React.Component {
    static propTypes = {
        isOpen: PropTypes.bool,
        addInstrument: PropTypes.func
      };

      constructor(props) {
        super(props);
        this.state = {
            instrumentId: INVALID_INSTRUMENT_ID,
            name: null,
            symbol: null,
            instrumentType: null
        };
      }

    validateNewInstrument = () => {
        return this.state.instrumentId !== INVALID_INSTRUMENT_ID && 
               this.state.name !== null && 
               this.state.name !== "" &&
               this.state.symbol !== null &&
               this.state.symbol !== "" &&
               this.state.instrumentType !== null && 
               this.state.instrumentType !== "";;
    };

    createNewInstrument = () => {
        if (this.validateNewInstrument()) {
            var instrument = {
                instrumentId: this.state.instrumentId,
                name: this.state.name,
                symbol: this.state.symbol,
                instrumentType: this.state.instrumentType
            };

            this.props.addInstrument(instrument);
        }
        else {
            alert("Must Fill Instrument Valid Details");
        }
      };

      handleChangeId = event => {
        this.state["instrumentId"] = event.target.valueAsNumber;
      };

      handleChange = (event, stateKey) => {
        this.state[stateKey] = event.target.value;
      };
    
    render() {
      return (
        <Collapse in={this.props.isOpen}>
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridId">
                <Form.Label>InstrumentId</Form.Label>
                <Form.Control type="number" placeholder="Instrument ID" onChange={this.handleChangeId}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" onChange={(e) => this.handleChange(e, "name")}/>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridSymbol">
                <Form.Label>Symbol</Form.Label>
                <Form.Control  type="text" placeholder="Symbol" onChange={(e) => this.handleChange(e, "symbol")}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridInstrumentType">
                <Form.Label>Instrument Type</Form.Label>
                <Form.Control  type="text" placeholder="Instrument Type" onChange={(e) => this.handleChange(e, "instrumentType")}/>
                </Form.Group>
            </Form.Row>
            <Button variant="success" type="button" onClick={this.createNewInstrument}>
                Add
            </Button>
            </Form>
      </Collapse>
      );
    }
  }