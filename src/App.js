import React, { Component } from 'react';
import './App.css';
import LocationList from "./components/LocationList";

class App extends Component {
  render() {
    return (
       <div>
         <LocationList/>
       </div>
    );
  }
}

export default App;
