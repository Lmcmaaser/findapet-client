import React from 'react'
import ApiContext from '../ApiContext'
import './Update.css';

class Update extends React.Component {
  static contextType = ApiContext;
  constructor(props) {
    super(props);
    this.state = {
      name: {
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
    };
  }

  static defaultProps = {
    onUpdatePet: () => {},
  }


  updateName(name) {
    this.setState({name: {value: name, touched: true}});
  }

  updateAge(age) {
    this.setState({age: {value: age, touched: true}});
  }

  updateAdopted(adopted) {
    this.setState({adopted: {value: adopted, touched: true}});
  }

  //pet = original object
  upPet(pet) {
    // value update for keys
    if (this.state.name.touched){
      pet.name = this.state.name.value;
    }
    if (this.state.age.touched) {
      pet.age = this.state.age.value;
    }
    if (this.state.adopted.touched) {
      pet.adopted = this.state.adopted.value;
    }
    return pet;
  }

  handleSubmit(event, pet) {
    event.preventDefault();
    const petToUpdate = this.upPet(pet);
    this.context.updatePet(petToUpdate);
    this.context.showMessage();
    this.props.history.push('/');
  }


  render() {
    const { pets=[] } = this.context;
    const pet = pets.find(pet => pet.id === parseInt(
      this.props.match.params.id
    ))
    return (
      <form className="update-form" onSubmit={event => this.handleSubmit(event, pet)}>
        <h2>Update a Pets's Information</h2>
        <fieldset>
          <legend>Update Form</legend>
            <label className="main-label">Pet to Update:</label>
              <div className="pet-section">
                <div key={pet.id}>
                  <div>Name: {pet.name}<br /></div>
                  <div>Type: {pet.pet_type}<br /></div>
                  <div>Sex: {pet.sex}<br /></div>
                  <div>Age: {pet.age}<br /></div>
                  <div>Adopted: {pet.adopted}<br /></div>
                </div>
              </div>
            <h4>Enter Information to Update</h4>
            <label  className="main-label" htmlFor="name">Name </label>
            <input
              type="text"
              name="name"
              id="name"
              aria-label=" input name"
              onChange={event => this.updateName(event.target.value)}
            />

            <label className="main-label" htmlFor="age">Age </label>
            <input
                type="text"
                name="age"
                id="age"
                onChange={event => this.updateAge(event.target.value)}
            />

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
          <div>
            <button
              className="submit-button"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    )
  }
}

export default Update;
