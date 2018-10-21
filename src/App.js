import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import './App.css';

const locations = ["Mount Washinton", "Schenley Park", "Carnegie Mellon University",
                  "Cathedral of Learning", "Point Park"];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar
          locations={locations}></Navbar>
        <MainContent
          locationName = {"Placeholder Location Name"}
          locationDescription = {"Temporary Placeholder"}
          ></MainContent>
      </div>
    );
  }
}

export default App;
