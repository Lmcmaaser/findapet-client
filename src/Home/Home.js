import React from 'react';
import './Home.css'

class Home extends React.Component {
  render () {
    return (
      <div className='content'>
        <h2>Instructions</h2>
        <div className="instructions">
          <ul>
            <li>
              FindAPet will help you manage all your shelter pets' information in one easy to use and convenient location!
            </li>
            <li>
              You can add, search for, and update any pet in the database!
            </li>
          </ul>
          <ol>
            <li>
              To get started, add a pet to the databse by click the "Add" link in the navigation bar at the top of the screen. <br />
              Fill out the form in it's entirety and click the "Submit" button at the bottom right corner of the page; the pet has now been added to the database!
            </li>
            <li>
              To search for a pet, or for multiple pets, click the "Search" link in the navigation bar at the top fo the screen.<br />
              The search page displays a list of all the pets in the database by default.<br />
              You can tailor your search to display pets by type, sex, adoption status, name, age.<br />
              As you select your search filters, the list of pets will change to reflect your selection.<br />
              If you want to reset your search, simply click the button that says "Click to reset the search!".
            </li>
            <li>
              To update a pet's information, use the Search page to find the pet you want to update.<br />
              Click the "Update" link located at the bottom of each listed pet, this will take you to a page to update that pet's information.<br />
              Use the form to fill out the information you would like to update (not all of the elements of the form need to be filled out).<br />
              Click the "Submit" button at the bottom right corner of the page; the pet's information has now been update in the database!
            </li>
            <li>
              Navigate this app with ease by using the navigation bar.
              The navigation bar will always be at the top of the screen, no matter what page you are on.
            </li>
          </ol>
        </div>
      </div>
  )}
}

export default Home;
