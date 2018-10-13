import React, { Component } from 'react';
import Cloud from '../public/cloud-1.png';

class WeatherDataDisplay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cloud1: "cloud cloud-1 hidden",
      cloud2: "cloud cloud-2 hidden",
      cloud3: "cloud cloud-3 hidden",
      cloud4: "cloud cloud-4 hidden",
      cloud5: "cloud cloud-5 hidden",
    };
  }

  componentDidMount(){
    setTimeout(() => {this.setState({
      cloud1: "cloud cloud-1",
      cloud2: "cloud cloud-2",
      cloud3: "cloud cloud-3",
      cloud4: "cloud cloud-4",
      cloud5: "cloud cloud-5"
    })}, 100);
    
  }

  render() {
    const data = this.props.data;
    const code = parseInt(this.props.data.cod);
    let sky;
    let skyProps;
    let rain;
    
    
    if (data.clouds.all >= 75) { 
      sky = "Overcast";
      skyProps = (
        <React.Fragment>
        <img className={this.state.cloud1} src={Cloud} alt="Small cloud" />
        <img className={this.state.cloud2} src={Cloud} alt="Small cloud" />
        <img className={this.state.cloud3} src={Cloud} alt="Small cloud" />
        <img className={this.state.cloud4} src={Cloud} alt="Small cloud" />
        <img className={this.state.cloud5} src={Cloud} alt="Small cloud" />
        </React.Fragment>
      );
    } else if (data.clouds.all >= 50) {
      sky = "Cloudy";
      skyProps = (
        <React.Fragment>
        <img className={this.state.cloud1} src={Cloud} alt="Small cloud" />
        <img className={this.state.cloud3} src={Cloud} alt="Small cloud" />
        <img className={this.state.cloud5} src={Cloud} alt="Small cloud" />
        </React.Fragment>
      );
    } else if (data.clouds.all >= 25) {
      sky = "Partially cloudy";
      skyProps = (
        <React.Fragment>
        <img className={this.state.cloud2} src={Cloud} alt="Small cloud" />
        <img className={this.state.cloud5} src={Cloud} alt="Small cloud" />
        </React.Fragment>
      );
    } else {
      sky = "clear";
    }

    
    if (data.weather[0].main === "Rain") {
      rain = (<h3>High probability of rain</h3>);
    } 
    
    switch (code) {
      case 200:
        return(
          <React.Fragment>
          {skyProps}
          <h3>{data.name} temperature: {Math.round(data.main.temp - 273.15)}ºC</h3>
          <h3>Sky: {sky}</h3>
          <h3>Humidity: {data.main.humidity}%</h3>
          {rain}
          </React.Fragment>
        );
      case 404:
        return(
          <React.Fragment>
          <h1>City not found</h1>
          </React.Fragment>
        );
      case 503:
        return(
          <React.Fragment>
          <h1>Service unavailable</h1>
          </React.Fragment>
        );

      default:
        return null;
      }
  };
}

export default WeatherDataDisplay

// create component which receives sky status, rain and temperature as props
// to display different assets