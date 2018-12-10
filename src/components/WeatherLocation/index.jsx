import React, { Component } from 'react';
import WeatherData from "./WeatherData";
import Location from './Location';
import './styles.css';
import {
    SUN,
} from './../../constants/weather.js';

const location = 'Buenos Aires,ar';
const api_key = '5adbdcb6d272223a6932ebb1d0918e82';
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;


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
      fetch(api_weather);
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