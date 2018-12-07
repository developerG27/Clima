import React from 'react';
import Location from "./Location";
import WeatherData from "./WeatherData";

const WeatherContainer = () => (
    <div>
        <Location city={"Buenos Aires"}/>
        <WeatherData/>
    </div>
);
export default WeatherContainer;