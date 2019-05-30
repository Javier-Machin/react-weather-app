import React from 'react';
import { shallow } from 'enzyme';
import BottomNav from '../components/BottomNav';

describe('BottomNav', () => {
  it('should render correctly', () => {
    const component = shallow(<BottomNav />);

    expect(component).toMatchSnapshot();
  });
});
