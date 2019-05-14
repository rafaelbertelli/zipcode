import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MapComponent } from './styled';

describe('Map Test Suite', () => {
  it('Should match snapshot', () => {
    const wrapper = shallow(<MapComponent />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
