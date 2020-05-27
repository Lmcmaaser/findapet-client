import React from 'react';
import ApiContext from '../ApiContext';
import config from '../config'
import './Delete.css'

class Delete extends React.Component {
  static contextType = ApiContext;

  updateStatus(remove) {
    this.setState({remove: {value: remove, touched: true}});
    console.log(remove) //shows input
  }

  handleSubmit(event, pet) {
    event.preventDefault();
    fetch(`${config.API_ENDPOINT}/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${config.API_TOKEN}`
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(event => Promise.reject(event))
        }
        return res
      })
      .then((deletePet) => {
        this.context.deletePet(pet);
        this.props.history.push('/');
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { pets=[] } = this.context;
    const pet = pets.find(pet => pet.id === this.props.match.params.id)
    return (
      <div className="delete-form" >
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
      </div>
    )
  }
}

export default Delete;
