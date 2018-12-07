import React, { Component } from 'react';
import './App.css';
import Location from "./components/Location";
import WeatherData from "./components/WeatherData";
import WeatherContainer from "./components/WeatherContainer";

class App extends Component {
  render() {
    return (
      <WeatherContainer/>
    );
  }
}

export default App;
