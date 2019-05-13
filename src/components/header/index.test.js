import React from 'react';
import { shallow } from 'enzyme';
import Header, { Form } from './index.js';

describe('Header Test Suite', () => {
  it('Should have a form', () => {
    const wrapper = shallow(<Header />);
    const form = wrapper.find(Form);
    expect(form).toBe(true);
  });
});
