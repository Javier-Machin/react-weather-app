import React, { Component } from 'react';
import '../css/SkyProps.css';
import Cloud from '../public/cloud-1.png';
import Sun from '../public/sun.png';
import Rain from '../public/rain.png';

class SkyProps extends Component {
  
  render() {
    const data = this.props.data;
    const temperature = Math.round(data.main.temp - 273.15);
    const rainStyle = { backgroundImage: 'url(' + Rain + ')' };
    let sky;
    let sun;
    let cloud1;
    let cloud2;
    let cloud3;
    let cloud4;
    let cloud5;
    let rain = "rain rain-hidden";    
    let displayFilter = "display-filter";

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
    
    return(
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
  }
}

export default SkyProps