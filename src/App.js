import React, { Component } from 'react';
import './App.css';

import FraudLoss from './pages/FraudLossPage';

export default class App extends Component {
  render() {
    return (
      <div className="App">
          <FraudLoss />
      </div>
    );
  }
}