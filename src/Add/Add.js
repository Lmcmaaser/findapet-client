import React from 'react';
import ValidationError from '../ValidationError.js';
import ValidationSuccess from '../ValidationSuccess/ValidationSuccess'
import ApiContext from '../ApiContext';
import './Add.css';

class Add extends React.Component {
  static contextType = ApiContext;

  constructor(props) {
    super(props)
    this.state = {
      submitted: false,
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
      }
    };
  }

  changeMessage = () => {
    this.setState({
      submitted: false
    })
  }

  updatePetType(pet_type) {
    this.setState({pet_type: {value: pet_type, touched: true}});
  }
  updateName(name) {
    this.setState({name: {value: name, touched: true}});
  }
  updateSex(sex) {
    this.setState({sex: {value: sex, touched: true}});
  }
  updateAge(age) {
    this.setState({age: {value: age, touched: true}});
  }


  handleSubmit(event) {
    event.preventDefault();
    const { name, pet_type, sex, age } = this.state;
    const no = "no";
    const pet = {
      name: name.value,
      age: age.value,
      sex: sex.value,
      adopted: no,
      pet_type: pet_type.value
    }
    this.context.addPet(pet)
    this.resetForm();
  }

  resetForm() {
    this.setState({
      submitted: true,
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
      }
    })
    document.querySelector('input[name="pet_type"]:checked').checked = false;
    document.querySelector('input[name="sex"]:checked').checked = false;
  }

  validateSuccess() {
    if (this.state.submitted) {
      return "Success! The pet was added!"
    }
  }

  validateName() {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return "Name is required";
    } else if (!name.match(/[A-z]/)) {
      return "Name must include characters from the modern English alphabet";
    }
  }

  validateAge() {
    const age = this.state.age.value.trim();
    if (age.length === 0) {
      return "Age is required";
    } else if (age.length < 0 || age.length > 2) {
      return "Age must be between 1 and 2 characters long.";
    } else if (!age.match(/[0-9]/)) {
      return "Age must contain at least one number";
    }
  }

  render () {
    const successMessage = this.validateSuccess();
    const nameError = this.validateName();
    const ageError = this.validateAge();
    return (
      <form className="add-form" onSubmit={event => this.handleSubmit(event)}>
        <h2>Add a Pet</h2>
        <div className="required">(*  indicates a required field)</div>
            {this.state.submitted && (
              <ValidationSuccess message={successMessage}
                changeMessage={this.changeMessage}
               className="successMessage"/>
            )}
        <div className="fieldset_wrap">
          <fieldset>
            <legend>Add Form</legend>
              <label className="main-label" htmlFor="pet_type">
                Select an animal type *
              </label>
              <label htmlFor="container">
                <input
                  type="radio"
                  id="dog"
                  name="pet_type"

                  value="dog"
                  aria-label="select pet type"
                  required
                  onChange={event => this.updatePetType(event.target.value)}
                />
                <span className="checkmark"></span>
              Dog</label>

              <label htmlFor="container">
                <input
                  type="radio"
                  id="cat"
                  name="pet_type"

                  value="cat"
                  aria-label="select pet type"
                  onChange={event => this.updatePetType(event.target.value)}
                />
                <span className="checkmark"></span>
              Cat</label>

              <label htmlFor="container">
                <input
                  type="radio"
                  id="bird"
                  name="pet_type"

                  value="bird"
                  aria-label="select pet type"
                  onChange={event => this.updatePetType(event.target.value)}
                />
                <span className="checkmark"></span>
              Bird</label>

              <label  className="main-label" htmlFor="name">Name *</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={this.state.name.value}
                  aria-label="add-name"
                  aria-required="true"
                  aria-invalid={ this.state.name.touched && !!nameError }
                  aria-describedby="nameError"
                  onChange={event => this.updateName(event.target.value)}
                />
                  {this.state.name.touched && (
                    <ValidationError message={nameError} id="nameError"/>
                  )}
          </fieldset>
          <fieldset>
            <legend>Add Form Second Half</legend>
              <label className="main-label" htmlFor="sex">
                Sex *
              </label>
              <label htmlFor="container">
                <input
                  type="radio"
                  id="male"
                  name="sex"
                  value="male"
                  aria-label="add-male-sex"
                  required
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
                  aria-label="add-female-sex"
                  onChange={event => this.updateSex(event.target.value)}
                />
                <span className="checkmark"></span>
              Female</label>

              <label className="main-label" htmlFor="age">Age *</label>
                <input
                  type="text"
                  name="age"
                  id="age"
                  required
                  value={this.state.age.value}
                  aria-label="add-age"
                  onChange={event => this.updateAge(event.target.value)}
                />
                {this.state.age.touched && (
                  <ValidationError message={ageError} />
                )}
          </fieldset>
        </div>
        <button
          type="submit"
          className="submit-button"
          aria-label="submit-button"
          disabled={
          this.validateName() ||
          this.validateAge()
          }

        >
          Submit
        </button>
      </form>
    )
  }
}
export default Add;
