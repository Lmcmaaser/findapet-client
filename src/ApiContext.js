import React from 'react';

const ApiContext = React.createContext({
  pets: [],
  setPets: () => {},
  addPet: () => {},
  updatePet: () => {},
  deletePet: () => {},
  changeMessage: () => {},
  showMessage: () => {}
});

export default ApiContext;
