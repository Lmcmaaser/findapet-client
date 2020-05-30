import React from 'react';
import config from '../config';
import ApiContext from '../ApiContext';
// import { Link } from 'react-router-dom'
import './Delete.css'

//rout from search is in the correct format: http://localhost:3000/delete/1
class Delete extends React.Component {
  static contextType = ApiContext;
  static defaultProps = {
    onDeletePet: () => {},
  }

  // updateStatus(remove) {
  //   this.setState({remove: {value: remove, touched: true}});
  //   console.log(remove) //shows input
  // }

  handleSubmit = event => {
    console.log("handle submit ran")
    // event.preventDefault();
    // const id = this.props.id
    // console.log("pet to delete:", id) // undefined
    // this.context.deletePet(id);
    // this.props.history.push('/');
  }

  render() {
    const { pets=[] } = this.context;
    // const { id, name, age, sex, adopted, pet_type } = this.props
    const pet = pets.find(pet => pet.id === this.props.match.params.id)
    console.log(pet);
    return (
      <div className="delete-form" >
        <h2>Would you like to delete this pet?</h2>
          <div className="section">
            <div className="pet-section">


            </div>
              <button
                className="submit-button"
                type="submit"
                onClick={this.handleSubmit}
              >
                Delete
              </button>
              <button
                className="submit-button"
                onClick={() => {
                  this.props.history.push('/')
                }}
              >
                Cancel
              </button>
          </div>
      </div>
    )
  }
}

export default Delete;
