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
    const pet = pets.find(pet => pet.id === this.props.match.params.id)
    console.log(pet)
    return (
      <div className="delete-form" >
        <h2>Would you like to delete this pet?</h2>
          <div className="section">
            <div className="pet-section">
              <div key={pet}>
                {pet}
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
      </div>
    )
  }
}
export default Delete
