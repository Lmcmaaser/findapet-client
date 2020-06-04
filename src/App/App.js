import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ApiContext from '../ApiContext';
import config from '../config';
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
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
      changed: false
    }
  }

  changeMessage = () => {
    this.setState({
      changed: false
    })
  }
  showMessage = () => {
    this.setState({
      changed: true
    })
  }
  validateSuccess() {
    if (this.state.changed) {
      return "Success! Change was made!"
    }
  }

  handleAddPet = pet => {
    fetch(`${config.API_ENDPOINT}pets`, {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${config.API_TOKEN}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(pet)
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(event => Promise.reject(event))
        return res.json()
      })
      .then((res) => {
        this.getAllPets(res);
      })
      .catch(error => {
        console.error({ error })
      })
  }

  handleDeletePet = pet => {
    fetch(`${config.API_ENDPOINT}pets/${pet.id}`, {
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
      .then((res) => {
        this.getAllPets(res);
      })
      .catch(error => {
        console.error({ error })
      })
  }

  handleUpdatePet = petToUpdate => {
    fetch(`${config.API_ENDPOINT}pets/${petToUpdate.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${config.API_TOKEN}`
      },
      body: JSON.stringify(petToUpdate)
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(event => Promise.reject(event))
        }
        return res
      })
      .then((res) => {
        this.getAllPets(res);
      })
      .catch(error => {
        console.error({ error })
      })
  }

  getAllPets() {
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

  componentDidMount() {
    this.getAllPets();
  }

  render() {
    const successMessage = this.validateSuccess();
    const contextValue = {
      pets: this.state.pets,
      addPet: this.handleAddPet,
      updatePet: this.handleUpdatePet,
      deletePet: this.handleDeletePet,
      changeMessage: this.changeMessage,
      showMessage: this.showMessage
    }
    return (
      <ApiContext.Provider value={contextValue}>
        <div className="App">
          <header className="App-header">
            <h1>FindAPet</h1>
            <h3>Makes managing your animal shelter easier!</h3>
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
