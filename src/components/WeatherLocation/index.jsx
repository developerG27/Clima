import React from 'react';
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

const WeatherContainer = () => (
    <div className="weatherLocationCont">
        <Location city="Buenos Aires"/>
        <WeatherData data={data}/>
    </div>
);
export default WeatherContainer;