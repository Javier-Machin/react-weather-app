import React from 'react';
import CityVector from '../images/weather-city.jpg';

// City background

const City = () => {
  return (
    <img
      className="city-vector"
      src={CityVector}
      alt="Drawing of some buildings representing a city"
    />
  );
};

export default City;
