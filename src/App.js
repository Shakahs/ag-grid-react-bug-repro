import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlightTable from './Grid'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FlightTable/>
      </div>
    );
  }
}

export default App;
