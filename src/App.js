import React, { Component } from 'react';
import requestData from './lib/requestData';
import LocationForm from './components/LocationForm';
import WeatherDataDisplay from './components/WeatherDataDisplay';
import CityVector from './public/weather-city.jpg';
import './css/App.css';


const city = (
  <img className="city-vector" src={CityVector} alt="Drawing of some buildings representing a city" />
);

const portfolioLink = (<a href="http://www.javiermachin.com">© Javier Machín</a>); 

const vectorCredit = (
  <a className="vector-credit" href="https://www.freepik.com/free-photos-vectors/house">
    House vector created by Rawpixel.com - Freepik.com
  </a>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "madrid", 
      data: 
        {cod: 0,
         clouds: {all: 0},
         weather: [{main: ""}]
      },
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
        <React.Fragment>
        <div className="main-container">
          <div className="display-container">
            {city}
            <div className="loading-message loading-true">Loading</div>
            <WeatherDataDisplay data={this.state.data} />
          </div>
          <LocationForm handleLocationChange={this.handleLocationChange} />
        </div>
        <div className="bottom-nav">
          {portfolioLink}
          {vectorCredit}
        </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
        <div className="main-container">
          <div className="display-container">
            {city}
            <div className="loading-message">Loading</div>
            <WeatherDataDisplay data={this.state.data} /> 
          </div>
          <LocationForm handleLocationChange={this.handleLocationChange} /> 
        </div>
        <div className="bottom-nav">
          {portfolioLink}
          {vectorCredit}
        </div>
        </React.Fragment>
      );
    }
  }
 
}

export default App;
