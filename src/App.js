import React, { Component } from 'react';
import requestData from './lib/requestData';
import LocationForm from './components/LocationForm';
import WeatherDataDisplay from './components/WeatherDataDisplay';
import CityVector from './public/weather-city.jpg';
import './css/App.css';


const city = (
  <img className="city-vector" src={CityVector} alt="Drawing of some buildings representing a city" />
); 

const vectorCredit = (
  <a href="https://www.freepik.com/free-photos-vectors/house">
    House vector created by Rawpixel.com - Freepik.com
  </a>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "madrid", 
      data: {cod: 0},
      loading: true
    }

    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.requestData = requestData.bind(this);
  }


  componentDidMount() {
    this.requestData(this.state.location);
  }

  handleLocationChange(location) {
    this.setState({loading: true});
    this.requestData(location);
    this.setState({location: `${location}`});
  }

  render() {
    if (this.state.loading === true) {
      return(
        <div className="main-container">
          {city}
          <LocationForm handleLocationChange={this.handleLocationChange} /> 
          <h3>LOADING</h3>
        </div>
      );
    } else {
      return (
        <div className="main-container">
          {city}
          <LocationForm handleLocationChange={this.handleLocationChange} /> 
          <WeatherDataDisplay data={this.state.data} />
        </div>
      );
    }
  }
 
}

export default App;
