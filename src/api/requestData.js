// Fetch weather data using openweathermap API

async function requestData(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=a58c376530b8af49dfeb836d445fd911`
    );
    const data = response.json();
    return data;
  } catch (error) {
    // return the error code
    return { data: { cod: 503 } };
  }
}

export default requestData;
