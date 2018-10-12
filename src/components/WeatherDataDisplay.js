import React, { Component } from 'react';

class WeatherDataDisplay extends Component {
  render() {
    const data = this.props.data;
    const code = parseInt(this.props.data.cod);
    let sky;
    let rain;

    if (data.clouds.all >= 75) { 
      sky = "overcast";
    } else if (data.clouds.all >= 50) {
      sky = "cloudy";
    } else if (data.clouds.all >= 25) {
      sky = "partially cloudy";
    } else {
      sky = "clear";
    }
    
    
    if (data.weather[0].main === "Rain") {
      rain = <h3>High probability of rain</h3>;
    } 
    
    switch (code) {
      case 200:
        return(
          <React.Fragment>
          <h3>{data.name} temperature: {Math.round(data.main.temp - 273.15)}ºC</h3>
          <h3>Sky: {sky}</h3>
          <h3>Humidity: {data.main.humidity}%</h3>
          {rain}
          </React.Fragment>
        );
      case 404:
        return(<h1>City not found</h1>);
      case 503:
        return(<h1>Service unavailable</h1>);
      default:
        return null;
      }
  };
}

export default WeatherDataDisplay