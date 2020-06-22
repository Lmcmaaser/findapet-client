import React from 'react'
import { Link } from 'react-router-dom';
import Content from '../Content';
import './Nav.css';


class Nav extends React.Component {
  render () {
    return (
      <Content className='Nav'>
        <Link to='/'>
          Home
        </Link>
        <Link to='/search'>
          Search
        </Link>
        <Link to='/add'>
          Add
        </Link>
      </Content>
    )
  }
}

export default Nav;
