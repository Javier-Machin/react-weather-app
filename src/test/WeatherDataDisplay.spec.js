import React from 'react';
import { shallow } from 'enzyme';
import WeatherDataDisplay from '../components/WeatherDataDisplay';

describe('WeatherDataDisplay', () => {
  it('should render correctly', () => {
    const component = shallow(<WeatherDataDisplay />);
    expect(component).toMatchSnapshot();
  });

  it('should display data correctly', () => {
    const weatherData = {
      temperature: 33,
      skyStatus: 'clear',
      rainProbability: 'unlikely',
      humidity: 33
    };

    const component = shallow(
      <WeatherDataDisplay weatherData={weatherData} statusCode={200} />
    );

    expect(component.text()).toContain('33ºC');
    expect(component.text()).toContain('clear');
    expect(component.text()).toContain('unlikely');
    expect(component.text()).toContain('Humidity: 33%');
  });

  it('should display city not found on 404', () => {
    const component = shallow(<WeatherDataDisplay statusCode={404} />);

    expect(component.text()).toContain('City not found');
  });

  it('should display service unavailable on 503', () => {
    const component = shallow(<WeatherDataDisplay statusCode={503} />);

    expect(component.text()).toContain('Service unavailable');
  });
});
