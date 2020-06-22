import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Home from './Home'

it('renders a .content by default', () => {
  const wrapper = shallow(<Home />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

it('renders without crashing', () => {
  shallow(<Home />);
});
