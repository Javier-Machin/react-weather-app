import sanitizeWeatherData from '../utils/sanitizeWeatherData';

describe('sanitizeWeatherData', () => {
  it('should return the correct data for rainy weather', () => {
    const data = {
      clouds: { all: 79 },
      weather: [{ main: 'Rain' }],
      main: { temp: 285, humidity: 63 },
      name: 'Madrid'
    };

    const {
      temperature,
      skyStatus,
      rainProbability,
      location,
      humidity
    } = sanitizeWeatherData(data);

    expect(temperature).toBe(12);
    expect(skyStatus).toBe('Overcast');
    expect(rainProbability).toContain('probable');
    expect(location).toBe('Madrid');
    expect(humidity).toBe(63);
  });

  it('should return the correct data for clear sunny weather', () => {
    const data = {
      clouds: { all: 4 },
      weather: [{ main: '' }],
      main: { temp: 305, humidity: 43 },
      name: 'Madrid'
    };

    const {
      temperature,
      skyStatus,
      rainProbability,
      location,
      humidity
    } = sanitizeWeatherData(data);

    expect(temperature).toBe(32);
    expect(skyStatus).toBe('clear');
    expect(rainProbability).not.toContain('probable');
    expect(location).toBe('Madrid');
    expect(humidity).toBe(43);
  });
});
