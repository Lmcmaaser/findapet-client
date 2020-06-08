import React from 'react';
import './Home.css'

class Home extends React.Component {
  render () {
    return (
      <div className='content'>
        <div className="block_one">
          <h2>Instructions</h2>
        </div>
        <div className="instructions">
          <div className="line_one">
              FindAPet will help you manage all your shelter pets' information in one easy to use and convenient location!<br />
          </div>
          <div className="line_one">
              You can add, search for, update, and delete any pet in the database.
          </div>
        </div>
      </div>
  )}
}

export default Home;
