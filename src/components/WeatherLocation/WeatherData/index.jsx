import React from 'react';
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../../constants/weather.js';
import './styles.css';

const Index = () => (
    <div className="weatherDataCont">
        <WeatherTemperature
            temperature={20}
            weatherState={SUN}
        />
        <WeatherExtraInfo humidity={80} wind={"10m/S"}/>
    </div>
);
export default Index;