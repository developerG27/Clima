import React from 'react';
import WeatherData from "./WeatherData";
import Location from './Location';
import './styles.css';

const WeatherContainer = () => (
    <div className="weatherLocationCont">
        <Location city="Buenos Aires"/>
        <WeatherData/>
    </div>
);
export default WeatherContainer;