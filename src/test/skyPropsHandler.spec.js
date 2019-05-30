import skyPropsHandler from '../utils/skyPropsHandler';

describe('skyPropsHandler', () => {
  it('should return the correct classes for rainy weather', () => {
    const weatherData = {
      temperature: 23,
      skyStatus: 'Overcast',
      rainProbability: 'probable'
    };

    const {
      cloudsClasses,
      sunClasses,
      displayFilterClasses,
      rainClasses
    } = skyPropsHandler(weatherData);

    expect(sunClasses).toBe('sun sun-hidden sun-small');
    expect(cloudsClasses[0]).toContain('dark');
    expect(displayFilterClasses).toContain('darker');
    expect(rainClasses).toBe('rain');
  });

  it('should return the correct classes for clear sunny weather', () => {
    const weatherData = {
      temperature: 33,
      skyStatus: 'clear',
      rainProbability: 'unlikely'
    };

    const {
      cloudsClasses,
      sunClasses,
      displayFilterClasses,
      rainClasses
    } = skyPropsHandler(weatherData);

    expect(sunClasses).toBe('sun sun-big');
    expect(cloudsClasses[0]).not.toContain('dark');
    expect(cloudsClasses[3]).toBe('cloud cloud-4 hidden');
    expect(displayFilterClasses).not.toContain('darker');
    expect(rainClasses).not.toBe('rain');
  });
});
