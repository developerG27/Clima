import React, { Component } from 'react';
import WeatherData from "./WeatherData";
import Location from './Location';
import './styles.css';
import {
    SUN,
} from './../../constants/weather.js';

const data = {
    temperature: 6,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}


class WeatherContainer extends Component {
   constructor(){
      super();
      this.state = {
         city: 'Buenos Aires',
         data: data,
      };
   }

   handleUpdateClick = () => {
      console.log("actualizado");


   }
   render(){
      const { data, city } = this.state;
      return(
         <div className="weatherLocationCont">
            <Location city={city}/>
            <WeatherData data={data}/>
            <button onClick={this.handleUpdateClick}>Aggiornare</button>
         </div>
      );
   }
}
export default WeatherContainer;