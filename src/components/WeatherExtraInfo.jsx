import React from 'react';

const WeatherExtraInfo = ({humidity, wind}) => (
    <div>
        <span>{`${humidity} % -`}</span>
        <span>{`${wind} vento`}</span>
    </div>
);

export default WeatherExtraInfo;