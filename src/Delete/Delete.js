import React from 'react';
import ApiContext from '../ApiContext';
import './Delete.css';

class Delete extends React.Component {
  static contextType = ApiContext;
  static defaultProps = {
    onDeletePet: () => {},
  }

  updateStatus(remove) {
    this.setState({remove: {value: remove, touched: true}});
    console.log(remove) //shows input
  }

  handleSubmit(event, pet) {
    console.log("submit fired");
    event.preventDefault();
    this.context.deletePet(pet);
    this.props.history.push('/');
  }

  render() {
    const { pets=[] } = this.context;
    console.log(pets); //shows all pets
    console.log(this.props.match.params.id); //shows pet id
    const pet = pets.find(pet => pet.id === parseInt(
      this.props.match.params.id
    ))
    console.log(pet)//shows full pet now
    return (
      <div className="delete-form" >
        <h2>Would you like to delete this pet?</h2>
          <div className="section">
            <div className="pet-section">
              
            </div>

              <button
                className="submit-button"
                type="submit"
                onClick={(event) => {this.handleSubmit(event, pet)
                }}
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
export default Delete
