import React from 'react';
import { shallow } from 'enzyme';
import LocationForm from '../components/LocationForm';

describe('LocationForm', () => {
  it('should render correctly', () => {
    const component = shallow(<LocationForm />);
    expect(component).toMatchSnapshot();
  });
});
