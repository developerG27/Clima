import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
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
      console.log("constructor");
   }

   componentDidMount() {
      console.log("componentDidMount");
      this.handleUpdateClick();
   }

   componentDidUpdate(prevProps, prevState) {
      console.log("componentDidUpdate");
   }

   handleUpdateClick = () => {
      fetch(api_weather).then(resolve => {
         return resolve.json();
      }).then(data =>{
         const newWeather = transformWeather(data);
         this.setState({
            data: newWeather
         });
      });
   }

   render(){
      console.log("render")
      const { data, city } = this.state;
      return(
         <div className="weatherLocationCont">
            <Location city={city}/>
            {data ?
               <WeatherData data={data}/> :
               <CircularProgress size={50}/>
            }
         </div>
      );
   }
}
export default WeatherContainer;