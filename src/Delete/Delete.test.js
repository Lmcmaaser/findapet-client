import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Delete from './Delete'

it('renders a .delete-form by default', () => {
  const wrapper = shallow(<Delete />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

it('renders without crashing', () => {
  shallow(<Delete />);
});
