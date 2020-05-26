import React from 'react';

const ApiContext = React.createContext({
  pets: [],
  setPets: () => {},
  addPet: () => {},
  updatePet: () => {},
  deletePet: () => {}
});

export default ApiContext;
