async function requestData(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=a58c376530b8af49dfeb836d445fd911`
    );
    const json = await response.json();
    // Fake extra loading time before setting state
    setTimeout(()=>{this.setState({ 
      data: json, 
      loading: false
    })}, 1000);
  } catch(error) {
    this.setState({ data: {cod: 503}});
  }
}

export default requestData