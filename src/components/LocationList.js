import React from 'react';
import WeatherContainer from "./WeatherLocation";

const LocationList = () => (
   <div>
      <WeatherContainer
         city="Buenos Aires,ar"
      />
      <WeatherContainer
         city="Milano"
      />
      <WeatherContainer
         city="Cina"
      />
      <WeatherContainer
         city="Barcelona,es"
      />
      <WeatherContainer
         city="Washington,US"
      />
   </div>
)

export default LocationList;