import React, { Component } from 'react';
import './App.css';
import LocationList from "./components/LocationList";
import {MuiThemeProviderOld} from "@material-ui/core/es/styles/MuiThemeProvider";

const cities = [
   "Buenos Aires,ar",
   "Washington,us",
   "Bogota,col",
   "Ciudad de México,mx",
   "Madrid,es",
   "Lima,pe",
];
class App extends Component {

   handleSelectionLocation = city => {
      console.log("handleSelectionLocation");
   }
  render() {
    return (
       <MuiThemeProviderOld>
          <div>
            <LocationList
               cities={cities}
               onSelectedLocation={this.handleSelectionLocation}
            />
          </div>
       </MuiThemeProviderOld>
    );
  }
}

export default App;
