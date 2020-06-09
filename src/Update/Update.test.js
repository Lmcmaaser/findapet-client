import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Update from './Update'

it('renders a .update-form by default', () => {
  const wrapper = shallow(<Update/>)
  expect(toJson(wrapper)).toMatchSnapshot()
})
