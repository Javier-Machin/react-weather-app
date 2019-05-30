import React from 'react';
import '../css/WeatherDataDisplay.css';

const WeatherDataDisplay = props => {
  const { statusCode } = props;

  // Return different elements depending on request status code

  switch (statusCode) {
    case 200:
      const {
        temperature,
        skyStatus,
        rainProbability,
        location,
        humidity
      } = props.weatherData;

      return (
        <section className="weather-values">
          <p>{location}</p>
          <p>{temperature}ºC</p>
          <p>{skyStatus}</p>
          <p>Humidity: {humidity}%</p>
          <p>{rainProbability}</p>
        </section>
      );
    case 404:
      return <section className="weather-values">City not found</section>;
    case 503:
      return <section className="weather-values">Service unavailable</section>;
    default:
      return null;
  }
};

export default WeatherDataDisplay;
