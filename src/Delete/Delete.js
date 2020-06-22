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
  }
  

  handleSubmit(event, pet) {
    event.preventDefault();
    this.context.deletePet(pet);
    this.context.showMessage();
    this.props.history.push('/');
  }

  render() {
    const { pets=[] } = this.context;
    const pet = pets.find(pet => pet.id === parseInt(
      this.props.match.params.id
    ))
    return (
      pet ? <div className="delete-form" >
        <h2>Would you like to delete this pet?</h2>
          <div className="section">
            <div className="pet-section">
              <div key={pet.id}>
                <div>Name: {pet.name}<br /></div>
                <div>Type: {pet.pet_type}<br /></div>
                <div>Sex: {pet.sex}<br /></div>
                <div>Age: {pet.age}<br /></div>
                <div>Adopted: {pet.adopted}<br /></div>
              </div>
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
      </div> : <></>
    )
  }
}
export default Delete
