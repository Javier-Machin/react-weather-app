// Animates the skyProps by adding and removing CSS classes
// Destructuring from weatherData

function skyPropsHandler({ temperature, skyStatus, rainProbability }) {
  // Display filter darkens the image and props depending on sky state and rain probability
  // Set classes based on that data
  const displayFilterClasses = setDisplayFilterClasses(skyStatus, rainProbability);

  // Set clouds classes depending on sky state and rain probability
  const cloudsClasses = setCloudsClasses(skyStatus, rainProbability);

  // Set sun classes depending on sky state and temperature
  const sunClasses = setSunClasses(skyStatus, temperature);

  // Set rain classes depending rain probability and sky state
  const rainClasses =
    rainProbability.includes('probable') && skyStatus !== 'clear'
      ? 'rain'
      : 'rain rain-hidden';

  return { rainClasses, cloudsClasses, displayFilterClasses, sunClasses };
}

// Helper functions

function setSunClasses(skyStatus, temperature) {
  // Add each class as a string to the array
  const sun = ['sun'];

  // Hide sun if the weather is overcast
  if (skyStatus === 'Overcast') sun.push('sun-hidden');

  // Display the sun bigger or smaller depending on temperature
  temperature >= 25 ? sun.push('sun-big') : sun.push('sun-small');

  // Return the array as a string
  return sun.join(' ');
}

function setDisplayFilterClasses(skyStatus, rainProbability) {
  // Add each class as a string to the array
  const displayFilter = ['display-filter'];

  // Make image darker if the weather is overcast
  if (skyStatus === 'Overcast') displayFilter.push('display-filter-dark');

  // Make image darker if the weather is rainy
  if (rainProbability.includes('probable')) displayFilter.push('display-filter-darker');

  // Return the array as a string
  return displayFilter.join(' ');
}

function setCloudsClasses(skyStatus, rainProbability) {
  let cloud1;
  let cloud2;
  let cloud3;
  let cloud4;
  let cloud5;

  // Hide or display clouds depending on sky status
  if (skyStatus === 'Overcast') {
    cloud1 = 'cloud cloud-1';
    cloud2 = 'cloud cloud-2';
    cloud3 = 'cloud cloud-3';
    cloud4 = 'cloud cloud-4';
    cloud5 = 'cloud cloud-5';
  } else if (skyStatus === 'Cloudy') {
    cloud1 = 'cloud cloud-1';
    cloud2 = 'cloud cloud-2 hidden';
    cloud3 = 'cloud cloud-3';
    cloud4 = 'cloud cloud-4 hidden';
    cloud5 = 'cloud cloud-5';
  } else if (skyStatus === 'Partially cloudy') {
    cloud1 = 'cloud cloud-1 hidden';
    cloud2 = 'cloud cloud-2';
    cloud3 = 'cloud cloud-3 hidden';
    cloud4 = 'cloud cloud-4';
    cloud5 = 'cloud cloud-5 hidden';
  } else {
    cloud1 = 'cloud cloud-1 hidden';
    cloud2 = 'cloud cloud-2 hidden';
    cloud3 = 'cloud cloud-3 hidden';
    cloud4 = 'cloud cloud-4 hidden';
    cloud5 = 'cloud cloud-5 hidden';
  }

  // Display darker clouds on rainy weather
  if (rainProbability.includes('probable') && skyStatus !== 'clear') {
    cloud1 = cloud1.concat(' cloud-dark');
    cloud2 = cloud2.concat(' cloud-dark');
    cloud3 = cloud3.concat(' cloud-dark');
    cloud4 = cloud4.concat(' cloud-dark');
    cloud5 = cloud5.concat(' cloud-dark');
  }

  return [cloud1, cloud2, cloud3, cloud4, cloud5];
}

export default skyPropsHandler;
