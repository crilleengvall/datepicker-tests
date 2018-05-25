import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {
  DayPickerSingleDateController,
  isInclusivelyBeforeDay,
 } from 'react-dates';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        React version: { React.version }
        <DayPickerSingleDateController
        />
      </div>
    );
  }
}

export default App;
