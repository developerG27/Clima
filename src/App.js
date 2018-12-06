import React, { Component } from 'react';
import './App.css';
import Location from "./components/Location";
import WeatherData from "./components/WeatherData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Location/>
        <WeatherData/>
      </div>
    );
  }
}

export default App;
