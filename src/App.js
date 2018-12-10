import React, { Component } from 'react';
import './App.css';
import LocationList from "./components/LocationList";

const cities = [
   "Buenos Aires,ar",
   "Washington,us",
   "Bogota,col",
   "Ciudad de México,mx",
   "Madrid,es",
   "Lima,pe",
];
class App extends Component {
  render() {
    return (
       <div>
         <LocationList cities={cities}/>
       </div>
    );
  }
}

export default App;
