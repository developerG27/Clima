import React, { Component } from 'react';
import WeatherData from "./WeatherData";
import Location from './Location';
import './styles.css';
import {
    SUN,
} from './../../constants/weather.js';
import transformWeather from '../../services/transformWeather';
import { api_weather } from '../../constants/api_url';

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
      fetch(api_weather).then(resolve => {
         console.log(resolve);
         return resolve.json();
      }).then(data =>{
         const newWeather = transformWeather(data);
         console.log(newWeather);
         debugger;
         this.setState({
            data: newWeather
         });
      });
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