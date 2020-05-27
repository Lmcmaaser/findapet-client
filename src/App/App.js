import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ApiContext from '../ApiContext';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Search from '../Search/Search';
import Add from '../Add/Add';
import Update from '../Update/Update';
import Delete from '../Delete/Delete';
import ValidationSuccess from '../ValidationSuccess/ValidationSuccess'
import './App.css';

class App extends Component {
  state = {
    pets: [],
    changed: false
  };

  //do I need this?
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     pets: this.props.data.pets,
  //     types: this.props.data.types,
  //     changed: false,
  //   }
  // };

  changeMessage = () => {
    this.setState({
      changed: false
    })
  }
  validateSuccess() {
    if (this.state.changed) {
      return "Success! Change was made!"
    }
  }
  handleDeletePet = deletePet => {
    this.setState({
        changed: true,
        pets: this.state.pets.filter(pet => pet.id !== deletePet.id)
    })
  }
  handleUpdatePet = updatedPet => {
    const updatedPets = this.state.pets.map((pet) => {
      if (pet.id === updatedPet.id) {
        for (let key in pet ){
          pet[key] = updatedPet[key];
        }
      }
      return pet;
    });
    this.setState({
      changed: true,
      pets: updatedPets
    })
  }
  handleAddPet = pet => {
    this.setState({
      pets: this.state.pets.concat(pet)
    })
  }
  handleSetPets = pet => {
    this.setState({
      filteredPets: this.state.pets.concat(pet)
    })
  }

  componentDidMount() {
      Promise.all([
        fetch(`${config.API_ENDPOINT}pets`, {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${config.API_TOKEN}`
          }
        })
      ])
        .then(([petsRes]) => {
            if (!petsRes.ok)
              return petsRes.json().then(e => Promise.reject(e));
            return Promise.all([petsRes.json()]);
        })
        .then(([pets]) => {
            this.setState({pets});
        })
        .catch(error => {
            console.error({error});
        });
  }

  render() {
    const successMessage = this.validateSuccess();
    const contextValue = {
      pets: this.state.pets,
      types: this.state.types,
      addPet: this.handleAddPet,
      updatePet: this.handleUpdatePet,
      setPets: this.handleSetPets,
      deletePet: this.handleDeletePet,
      changeMessage: this.changeMessage
    }
    return (
      <ApiContext.Provider value={contextValue}>
        <div className="App">
          <header className="App-header">
            <h1>FindAPet</h1>
            <h3>The app that makes managing your animal shelter easier!</h3>
          </header>
          <nav>
            <Nav />
          </nav>
          <main>
            {this.state.changed && (
              <ValidationSuccess message={successMessage}
                changeMessage={this.changeMessage}
               className="successMessage"/>
            )}
            <Route exact path='/' component={Home}/>
            <Route path='/search' component={Search} />
            <Route path='/add' component={Add} />
            <Route path='/update/:id' component={Update} />
            <Route path='/delete/:id' component={Delete} />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </ApiContext.Provider>
    )
  }
}

export default App;
