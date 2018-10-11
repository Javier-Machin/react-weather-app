import React, { Component } from 'react';

class WeatherDataDisplay extends Component {
  render() {
    const data = this.props.data;
    const code = parseInt(this.props.data.cod);
    
    switch (code) {
      case 200:
        return(
          <React.Fragment>
          <h1>
            {data.name} temperature: {Math.round(data.main.temp - 273.15)}ºC
          </h1>
          <p>{data.clouds.all > 50 ? "cloudy" : "clear"}</p>
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