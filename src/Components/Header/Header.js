import React from 'react';
import PropTypes from "prop-types";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import "./Header.css";

const logo = require('../../logo192.png')

export default class Header extends React.Component {
  static propTypes = {
    changeCollapseState: PropTypes.func,
  };

  changeCollapseState = () => {
    this.props.changeCollapseState();
  };

    render() {
        return (
          <Navbar className="justify-content-between" bg="dark" variant="dark">
            <Navbar.Brand>
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Protfolio Tool - Instruments Search
            </Navbar.Brand>
            <Button variant="success" onClick={this.changeCollapseState}>Add Instrument</Button>
          </Navbar>
        );
      }
}