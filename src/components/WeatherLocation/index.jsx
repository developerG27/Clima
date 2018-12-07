import React from 'react';
import WeatherData from "./WeatherData";
import Location from './Location';

const WeatherContainer = () => (
    <div>
        <Location city="Buenos Aires"/>
        <WeatherData/>
    </div>
);
export default WeatherContainer;