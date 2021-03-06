import React from 'react';
import ApiContext from '../ApiContext';
import './Search.css';
import { Link } from 'react-router-dom';


export default class Search extends React.Component {
  static contextType = ApiContext;
  constructor(props) {
    super(props)
    this.state = {
        pet_typeFilter  : [],
        name: {
          value: '',
          touched: false
        },
        pet_type: {
          value: '',
          touched: false
        },
         sex: {
          value: '',
          touched: false
        },
        age: {
          value: '',
          touched: false
        },
        adopted: {
          value: '',
          touched: false
        }
      }
  }
  // "filter" is the value of the selected input
  // this.state.pet_typeFilter will contain an array of the selected animals to be filtered
  updatePetType(event) {
    let selectedValues = [...this.state.pet_typeFilter];
    if (event.target.checked) {
      if (selectedValues.indexOf(event.target.value) === -1) {
        selectedValues.push(event.target.value);
      }
    } else {
      selectedValues = selectedValues.filter(item => item !== event.target.value);
    }
    this.setState({
      pet_typeFilter: selectedValues
    }, ()=>this.state.pet_typeFilter)
  }

  updateSex(filter) {
    this.setState({
      sexFilter: filter
    })
  }

  updateAdopted(filter) {
    this.setState({
      adoptedFilter: filter
    })
  }

  updateName(filter) {
    this.setState({
      nameFilter: filter
    })
  }

  updateAge(filter) {
    this.setState({
      ageFilter: filter
    })
  }

  getFilteredPets = (pets) => {
    return pets.filter((pet) => {
        if (
          (this.state.pet_typeFilter.length === 0 || this.state.pet_typeFilter.indexOf(pet.pet_type) > -1)
          &&
            (!this.state.sexFilter || this.state.sexFilter === pet.sex)
          &&
            (!this.state.adoptedFilter || this.state.adoptedFilter === pet.adopted)
          &&
            (!this.state.nameFilter || pet.name === this.state.nameFilter)
          &&
            (!this.state.ageFilter || pet.age === this.state.ageFilter)
          ) {
           return true;
        } else {
          return false;
        }
    });
  }

  refreshPage() {
    window.location.reload(false);
  }

  render () {
    const { pets=[] } = this.context
    let filteredPets = this.getFilteredPets(pets)
    return(
      <div className="complete-section">
        <form className="search-form" id="search-form" >
          <h2>Search the Database</h2>
          <div className="search-instructions">
            <div className="instructions_header">Instructions</div>
            <div className="one">The Search page displays a list of all the pets in the database by default.</div>
            <div className="one">You can tailor your search to display pets by type, sex, adoption status, name, and age.</div>
            <div className="one">As you select your search filters, the list of displayed pets will change to reflect your selection.</div>
            <div className="one">If you want to start a new search, click the button that says "Reset Search".</div>
          </div>
          <div className="fieldset_wrap">
            <fieldset>
              <legend>Search Form</legend>
                <label className="main-label" htmlFor="pet_type">
                  Select an animal type
                </label>
                <label htmlFor="container">
                  <input
                    type="checkbox"
                    id="pet_type"
                    name="pet_type"
                    value="dog"
                    aria-label="select pet type"
                    onChange={event => this.updatePetType(event)}
                  />
                  <span className="checkmark"></span>
                Dog</label>

                <label htmlFor="container">
                  <input
                    type="checkbox"
                    id="pet_type"
                    name="pet_type"
                    value="cat"
                    aria-label="select pet type"
                    onChange={event => this.updatePetType(event)}
                  />
                  <span className="checkmark"></span>
                Cat</label>

                <label htmlFor="container">
                  <input
                    type="checkbox"
                    id="pet_type"
                    name="bird"
                    value="bird"
                    aria-label="select pet type"
                    onClick={event => this.updatePetType(event)}
                  />
                  <span className="checkmark"></span>
                Bird</label>

                <label className="main-label" htmlFor="sex">
                  Sex
                </label>
                <label htmlFor="container">
                  <input
                    type="radio"
                    id="male"
                    name="sex"
                    value="male"
                    aria-label="select-male-sex"
                    onChange={event => this.updateSex(event.target.value)}
                  />
                  <span className="checkmark"></span>
                Male</label>
                <label htmlFor="container">
                  <input
                    type="radio"
                    id="female"
                    name="sex"
                    value="female"
                    aria-label="select-female-sex"
                    onChange={event => this.updateSex(event.target.value)}
                  />
                  <span className="checkmark"></span>
                Female</label>
            </fieldset>
            <fieldset>
              <legend>Search Form Second Part</legend>
                <label className="main-label" htmlFor="adopted">
                  Adopted
                </label>
                <label htmlFor="container">
                  <input
                    type="radio"
                    id="yes"
                    name="adopted"
                    value="yes"
                    aria-label="select adopted"
                    onChange={event => this.updateAdopted(event.target.value)}
                  />
                  <span className="checkmark"></span>
                Adopted</label>

                <label htmlFor="container">
                  <input
                    type="radio"
                    id="no"
                    name="adopted"
                    value="no"
                    aria-label="select adopted"
                    onChange={event => this.updateAdopted(event.target.value)}
                  />
                  <span className="checkmark"></span>
                Unadopted</label>

                <label  className="main-label" htmlFor="name">Name (case-sensitive)</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  aria-label="input name"
                  onChange={event => this.updateName(event.target.value)}
                />

                <label className="main-label" htmlFor="age">Age</label>
                <input
                  type="text"
                  name="age"
                  id="age"
                  aria-label="input age"
                  onChange={event => this.updateAge(event.target.value)}
                />
            </fieldset>
          </div>
          <button
            type="reset"
            value="Reset"
            className="reset-button"
            aria-label="reset button"
            onClick={event => this.refreshPage(event.target.value)}
          >
            Reset Search
          </button>
        </form>

        <div className="results-section">
          <h4>Search Results:</h4>
          <div className="results-list">
            <ul>
              {filteredPets.map((pet) =>
                <li key={pet.id} id={pet.id}>
                  <div className="pet_details">
                    <div>Name: {pet.name}<br /></div>
                    <div>Type: {pet.pet_type}<br /></div>
                    <div>Sex: {pet.sex}<br /></div>
                    <div>Age: {pet.age}<br /></div>
                    <div>Adopted: {pet.adopted}<br /></div>
                  </div>
                  <div className="buttons">
                    <button className='Pet_button'><Link to={`/update/${pet.id}`}>
                      Update
                    </Link></button>
                    <button className='Pet_button'><Link to={`/delete/${pet.id}`}>
                      Delete
                    </Link></button>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
