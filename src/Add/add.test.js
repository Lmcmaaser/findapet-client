import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Add from './Add'

it('renders a .add-form by default', () => {
  const wrapper = shallow(<Add />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
