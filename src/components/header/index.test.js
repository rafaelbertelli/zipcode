import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import Header from './index.js';
import { Form, Button } from './styled';

describe('Header Test Suite', () => {
  it('Should match snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('Should have one form', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(Form)).toHaveLength(1)
  })

  it('Should have one button', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(Button)).toHaveLength(1)
  })
});
