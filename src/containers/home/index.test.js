import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HomeComponent } from './styled';

describe('Home Test Suite', () => {
  it('Should match snapshot', () => {
    const wrapper = shallow(<HomeComponent />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
