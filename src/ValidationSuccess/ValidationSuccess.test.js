import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ValidationSuccess from './ValidationSuccess'

it('renders a .success by default', () => {
  const wrapper = shallow(<ValidationSuccess />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

it('renders without crashing', () => {
  shallow(<ValidationSuccess />);
});
