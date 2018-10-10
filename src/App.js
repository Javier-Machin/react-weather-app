import React, { Component } from 'react';
import './css/App.css';

class WeatherDataDisplay extends React.Component {
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: {cod: 0}
    }
  }

  render() {
    return (
      <div className="main-container">
        <WeatherDataDisplay data={this.state.data} />
      </div>
    );
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=london&APPID=a58c376530b8af49dfeb836d445fd911`
      );
      const json = await response.json();
      console.log(json);
      this.setState({ data: json });
    } catch(error) {
      this.setState({ data: {cod: 503}});
    }
  }

}

export default App;
