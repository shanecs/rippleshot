/* App.js */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sidebar from "react-sidebar";



export default class ControlPanel extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
  } 
  
  renderOptions() {
    return <b>Sidebar content</b>
  }

  render() {
    const { open } = this.props;

    return (
      <Sidebar
        sidebar={this.renderOptions()}
        open={open}
        styles={{ sidebar: { background: "white" } }}
        pullRight='true'
      />
    );
  }
}
