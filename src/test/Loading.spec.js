import React from 'react';
import { shallow } from 'enzyme';
import LoadingMessage from '../components/Loading';

describe('LoadingMessage', () => {
  it('should render correctly', () => {
    const component = shallow(<LoadingMessage />);
    expect(component).toMatchSnapshot();
  });

  it('should display a loading message when passed loading true prop', () => {
    const component = shallow(<LoadingMessage loading />);
    expect(component.find('div.loading-true')).toHaveLength(1);
  });

  it('should not display a loading message when passed loading false prop', () => {
    const component = shallow(<LoadingMessage loading={false} />);
    expect(component.find('div.loading-true')).toHaveLength(0);
  });
});
