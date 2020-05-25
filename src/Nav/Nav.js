import React from 'react'
import { Link } from 'react-router-dom';
import Content from '../Content';
import './Nav.css';

class Nav extends React.Component {
  render () {
    return (
      <Content className='Nav'>
        <Link to='/'>
          Home Page
        </Link>
        <Link to='/search'>
          Search Database
        </Link>
        <Link to='/add'>
          Add an Animal
        </Link>
      </Content>
    )
  }
}

export default Nav;
