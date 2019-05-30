import React from 'react';
import { shallow } from 'enzyme';
import SkyProps from '../components/SkyProps';

describe('SkyProps', () => {
  it('should render correctly', () => {
    const component = shallow(<SkyProps />);
    expect(component).toMatchSnapshot();
  });

  it('should display a big sun on sunny weather', () => {
    const weatherData = {
      temperature: 33,
      skyStatus: 'clear',
      rainProbability: 'unlikely'
    };

    const component = shallow(<SkyProps weatherData={weatherData} statusCode={200} />);
    expect(component.find('img.sun-big')).toHaveLength(1);
  });

  it('should hide rain on not rainy weather', () => {
    const weatherData = {
      temperature: 33,
      skyStatus: 'Overcast',
      rainProbability: 'unlikely'
    };

    const component = shallow(<SkyProps weatherData={weatherData} statusCode={200} />);
    expect(component.find('div.rain-hidden')).toHaveLength(1);
  });

  it('should not hide rain on rainy weather', () => {
    const weatherData = {
      temperature: 33,
      skyStatus: 'Overcast',
      rainProbability: 'probable'
    };

    const component = shallow(<SkyProps weatherData={weatherData} statusCode={200} />);
    expect(component.find('div.rain-hidden')).toHaveLength(0);
  });
});
