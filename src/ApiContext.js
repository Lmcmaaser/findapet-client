import React from 'react';

const ApiContext = React.createContext({
  pets: [],
  // types: [],
  setPets: () => {},
  addPet: () => {},
  updatePet: () => {},
});

export default ApiContext;
