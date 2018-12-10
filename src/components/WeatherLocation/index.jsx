import React, { Component } from 'react';
import convert from 'convert-units';
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

   getTemp = kelvin => {
      return Number(convert(kelvin).from("K").to("C").toFixed(2));
   }

   getWeatherState = weather_data => {
   return SUN;
   }

   getData = weather_data => {
      const {humidity, temp} = weather_data.main;
      const {speed} = weather_data.wind;
      const weatherState = this.getWeatherState(weather_data);
      const temperature = this.getTemp(temp);

      const data = {
         humidity,
         temperature,
         weatherState,
         wind: `${speed} m/s`,
      }
      return data;
   }


   handleUpdateClick = () => {
      fetch(api_weather).then(resolve => {
         console.log(resolve);
         return resolve.json();
      }).then(data =>{
         const newWeather = this.getData(data);
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