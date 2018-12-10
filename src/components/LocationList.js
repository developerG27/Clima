import React from 'react';
import WeatherContainer from "./WeatherLocation";
import PropTypes from 'prop-types';

const LocationList = ({cities}) => {
      return(
         <div>
               <WeatherContainer
                  city="Buenos Aires,ar"
               />
               <WeatherContainer
                  city="Milan,it"
               />
               <WeatherContainer
                  city="Barcelona,es"
               />
               <WeatherContainer
                  city="Washington,US"
               />
         </div>
      )


}



LocationList.propTypes = {
      cities: PropTypes.array.isRequired,
};

export default LocationList;