import React, { Component } from 'react';
import Cloud from '../public/cloud-1.png';
import Sun from '../public/sun.png';
import Rain from '../public/rain.png';


class WeatherDataDisplay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sun:    "sun sun-hidden",
      cloud1: "cloud cloud-1 hidden",
      cloud2: "cloud cloud-2 hidden",
      cloud3: "cloud cloud-3 hidden",
      cloud4: "cloud cloud-4 hidden",
      cloud5: "cloud cloud-5 hidden",
      rain: "rain rain-hidden"
    };
  }

  render() {
    const data = this.props.data;
    const code = parseInt(this.props.data.cod);
    let sky;
    let skyProps;
    let sun;
    let cloud1;
    let cloud2;
    let cloud3;
    let cloud4;
    let cloud5;
    let rain = "rain rain-hidden";
    let rainValue = "rain unlikely";
    let temperature = "";
    let displayFilter = "display-filter";

    if (code === 200) {
      temperature = Math.round(data.main.temp - 273.15);
      if (data.clouds.all >= 75) {
        sky = "Overcast";
        sun = "sun sun-hidden";
        cloud1 = "cloud cloud-1";
        cloud2 = "cloud cloud-2";
        cloud3 = "cloud cloud-3";
        cloud4 = "cloud cloud-4";
        cloud5 = "cloud cloud-5";
        displayFilter = "display-filter display-filter-dark";
      } else if (data.clouds.all >= 50) {
        sky = "Cloudy";
        sun = "sun";
        cloud1 = "cloud cloud-1";
        cloud2 = "cloud cloud-2 hidden";
        cloud3 = "cloud cloud-3";
        cloud4 = "cloud cloud-4 hidden";
        cloud5 = "cloud cloud-5";
      } else if (data.clouds.all >= 25) {
        sky = "Partially cloudy";
        sun = "sun";
        cloud1 = "cloud cloud-1 hidden";
        cloud2 = "cloud cloud-2";
        cloud3 = "cloud cloud-3 hidden";
        cloud4 = "cloud cloud-4";
        cloud5 = "cloud cloud-5 hidden";
      } else {
        sky = "clear";
        sun = "sun";
        cloud1 = "cloud cloud-1 hidden";
        cloud2 = "cloud cloud-2 hidden";
        cloud3 = "cloud cloud-3 hidden";
        cloud4 = "cloud cloud-4 hidden";
        cloud5 = "cloud cloud-5 hidden";
      }

      if (data.weather[0].main === "Rain" && sky !== "clear") {
        rain = "rain";
        rainValue = "rain: highly probable";
        cloud1 = cloud1.concat(" cloud-dark");
        cloud2 = cloud2.concat(" cloud-dark");
        cloud3 = cloud3.concat(" cloud-dark");
        cloud4 = cloud4.concat(" cloud-dark");
        cloud5 = cloud5.concat(" cloud-dark");
        displayFilter = displayFilter.concat(" display-filter-darker");
        sun = sun.concat(" sun-small");
      } 

      if (temperature >= 25) {
        sun = sun.concat(" sun-big");
      } else if (temperature <= 15) {
        sun = sun.concat(" sun-small");
      }
    }

    const rainStyle = {
      backgroundImage: 'url(' + Rain + ')'
    };

    skyProps = (
      <React.Fragment>
      <img className={sun} src={Sun} alt="Sun drawing" />
      <div className={rain} style={rainStyle}></div>
      <img className={cloud1} src={Cloud} alt="Small cloud" />
      <img className={cloud2} src={Cloud} alt="Small cloud" />
      <img className={cloud3} src={Cloud} alt="Small cloud" />
      <img className={cloud4} src={Cloud} alt="Small cloud" />
      <img className={cloud5} src={Cloud} alt="Small cloud" />
      <div className={displayFilter}></div>
      </React.Fragment>
    );

    switch (code) {
      case 200:
        return(
          <React.Fragment>
          {skyProps}
          <div className="weather-values">
            <div className="weather-values__item">{data.name}</div>
            <div className="weather-values__item">{temperature}ºC</div>
            <div className="weather-values__item">{sky}</div>
            <div className="weather-values__item">Humidity: {data.main.humidity}%</div>
            <div className="weather-values__item">{rainValue}</div>
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

// create component which receives data and temperature as props
// returns skyProps