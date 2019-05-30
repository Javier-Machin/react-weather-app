import React, { Component, Fragment } from 'react';
import requestData from './api/requestData';
import LocationForm from './components/LocationForm';
import WeatherDataDisplay from './components/WeatherDataDisplay';
import BottomNav from './components/BottomNav';
import City from './components/City';
import SkyProps from './components/SkyProps';
import LoadingMessage from './components/Loading';
import initialData from './utils/initialData';
import sanitizeWeatherData from './utils/sanitizeWeatherData';
import './css/App.css';

class App extends Component {
  state = {
    location: 'madrid',
    weatherData: initialData,
    loading: true,
    statusCode: 0
  };

  componentDidMount() {
    // Request first load data
    this.handleLocationChange(this.state.location);
  }

  handleLocationChange = async location => {
    const { loading } = this.state;

    // Set loading true while waiting for the request
    if (!loading) this.setState({ loading: true });

    // API request
    const data = await requestData(location);

    // Get request status
    let statusCode = parseInt(data.cod);
    if (!statusCode) statusCode = 503;

    // Sanitize data only on success code
    const weatherData = statusCode === 200 ? sanitizeWeatherData(data) : null;

    // Update data and set loading to false
    this.setState({ location, weatherData, loading: false, statusCode });
  };

  render() {
    const { loading, weatherData, statusCode } = this.state;

    return (
      <Fragment>
        <main className="main-container">
          <section className="display-container">
            <City />
            <SkyProps weatherData={weatherData} statusCode={statusCode} />
            <LoadingMessage loading={loading} />
            <WeatherDataDisplay weatherData={weatherData} statusCode={statusCode} />
          </section>
          <LocationForm handleLocationChange={this.handleLocationChange} />
        </main>
        <BottomNav />
      </Fragment>
    );
  }
}

export default App;
