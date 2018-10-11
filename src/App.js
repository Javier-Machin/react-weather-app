import React, { Component } from 'react';
import requestData from './lib/requestData';
import LocationForm from './components/LocationForm';
import WeatherDataDisplay from './components/WeatherDataDisplay';
import './css/App.css';

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
    this.requestData(location);
    this.setState({location: `${location}`});
  }

  render() {
    if (this.state.loading === true) {
      return(
        <div className="main-container">
          <LocationForm handleLocationChange={this.handleLocationChange} /> 
          <h3>LOADING</h3>
        </div>
      );
    } else {
      return (
        <div className="main-container">
          <LocationForm handleLocationChange={this.handleLocationChange} /> 
          <WeatherDataDisplay data={this.state.data} />
        </div>
      );
    }
  }
 
}

export default App;
