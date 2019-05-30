// Sanitize API response
// Destructuring from data object

function sanitizeWeatherData({ clouds, weather, main, name }) {
  // Extract location and humidity from data
  const location = name;
  const humidity = main.humidity;

  // Set sky depending on clouds value
  const skyStatus = setSkyStatus(clouds.all);

  // Set rain value depending on forecast and skyStatus
  const rainProbability = setRainProbability(weather[0].main, skyStatus);

  // Convert temperature to celsius
  const temperature = Math.round(main.temp - 273.15);

  // Return object containing ready to use values
  return { temperature, skyStatus, rainProbability, location, humidity };
}

// Helper functions

function setSkyStatus(clouds) {
  // Default value for skyStatus
  let skyStatus = 'clear';

  if (clouds >= 75) {
    skyStatus = 'Overcast';
  } else if (clouds >= 50) {
    skyStatus = 'Cloudy';
  } else if (clouds >= 25) {
    skyStatus = 'Partially cloudy';
  }

  return skyStatus;
}

function setRainProbability(forecast, skyStatus) {
  return forecast === 'Rain' && skyStatus !== 'clear'
    ? 'rain: highly probable'
    : 'rain unlikely';
}

export default sanitizeWeatherData;
