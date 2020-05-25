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
          <div className="sub-section">How to Add a Pet</div>
            <ol>
              <li>
                To get started, add a pet to the databse by clicking the "Add" link in the navigation bar at the top of the screen.
              </li>
              <li>
                Fill out the form in it's entirety and click the "Submit" button at the bottom right corner of the page; the pet has now been added to the database!
              </li>
            </ol>
          <div className="sub-section">How to Use the Search Page</div>
            <ol>
              <li>
                To search for a pet, or for multiple pets, click the "Search" link in the navigation bar at the top fo the screen.
              </li>
              <li>
                The search page displays a list of all the pets in the database by default.
              </li>
              <li>
                You can tailor your search to display pets by type, sex, adoption status, name, age.
              </li>
              <li>
                As you select your search filters, the list of pets will change to reflect your selection.
              </li>
              <li>
                If you want to reset your search, simply click the button that says "Click to reset the search!".
              </li>
            </ol>
          <div className="sub-section">How to Update a Pet's Information</div>
            <ol>
              <li>
                To update a pet's information, use the Search page to find the pet you want to update.
              </li>
              <li>
                Click the "Update" link located at the bottom of each listed pet, this will take you to a page to update that pet's information.
              </li>
              <li>
                Use the form to fill out the information you would like to update (not all of the elements of the form need to be filled out).
              </li>
              <li>
                Click the "Submit" button at the bottom right corner of the page; the pet's information has now been update in the database!
              </li>
            </ol>
          <div className="sub-section">How to Delete a Pet from the Database</div>
            <ol>
              <li>
                To delete a pet's information, use the Search page to find the pet you want to update.
              </li>
              <li>
                Click the "Delete" link located at the bottom of each listed pet, this will take you to a page to delete that pet's information.
              </li>
              <li>
                Click the "Delete" button to delete the pet's information, or click "Cancel" button to return to the home page.
              </li>
            </ol>
          <div className="sub-section">How to Use the Navigation Bar</div>
            <ol>
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
