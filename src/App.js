import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import './App.css';

import locations from './locations';

class App extends Component {
  state = {
    location: {
      name: "Mount Washington",
      description:locations["Mount Washington"]["description"],
      background:{
        backgroundImage: 'linear-gradient(0deg,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url("./images/'+
        locations["Mount Washington"]["image"]+
        '")'
      }
    }
  }

  handleLocationChange = (newLocation) => {
    this.setState({
      location: {
        name:newLocation,
        description: locations[newLocation]["description"],
        background:{
          backgroundImage: 'linear-gradient(0deg,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url("./images/'+
          locations[newLocation]["image"]+
          '")'
        }
      }
    });
  }

  render() {
    return (
      <div className="App" id="App" style={this.state.location.background}>
        <Navbar
          changeLocation = {this.handleLocationChange}
          locations={Object.keys(locations)}></Navbar>
        <MainContent
          locationName = {this.state.location.name}
          locationDescription = {this.state.location.description}
          ></MainContent>
      </div>
    );
  }
}

export default App;
