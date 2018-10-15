import React, { Component } from 'react';
import '../css/WeatherDataDisplay.css';
import SkyProps from './SkyProps';

class WeatherDataDisplay extends Component {

  render() {
    const data = this.props.data;
    const code = parseInt(this.props.data.cod);
    let sky;
    let rainValue = "rain unlikely";
    let temperature = "";

    if (code === 200) {
       temperature = Math.round(data.main.temp - 273.15);
      if (data.clouds.all >= 75) {
        sky = "Overcast";
      } else if (data.clouds.all >= 50) {
        sky = "Cloudy";
      } else if (data.clouds.all >= 25) {
        sky = "Partially cloudy";
      } else {
        sky = "clear";
      }

      if (data.weather[0].main === "Rain" && sky !== "clear") {
        rainValue = "rain: highly probable";
      } 
    }

    switch (code) {
      case 200:
        return(
          <React.Fragment>
          <SkyProps data={data} />
          <div className="weather-values">
            <div>{data.name}</div>
            <div>{temperature}ºC</div>
            <div>{sky}</div>
            <div>Humidity: {data.main.humidity}%</div>
            <div>{rainValue}</div>
          </div>
          </React.Fragment>
        );
      case 404:
        return(
          <React.Fragment>
          <div className="weather-values">City not found</div>
          </React.Fragment>
        );
      case 503:
        return(
          <React.Fragment>
          <div className="weather-values">Service unavailable</div>
          </React.Fragment>
        );

      default:
        return null;
      }
  };
}

export default WeatherDataDisplay