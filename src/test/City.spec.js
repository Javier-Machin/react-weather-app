import React from 'react';
import { shallow } from 'enzyme';
import City from '../components/City';

describe('City', () => {
  it('should render correctly', () => {
    const component = shallow(<City />);

    expect(component).toMatchSnapshot();
  });
});
