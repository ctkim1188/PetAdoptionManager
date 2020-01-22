import React from 'react';
import './App.css';
import PetList from './components/PetList';
import PetForm from './components/PetForm';
import {Router, Redirect} from '@reach/router'
import PetDetails from './components/PetDetails';
import PetUpdate from './components/PetUpdate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pet Shelter</h1>
        <Router>
          <Redirect from = '/' to = '/pets' noThrow/>
          <PetList path = '/pets' default/>
          <PetForm path = '/pets/new'/>
          <PetDetails path = '/pets/:id'/>
          <PetUpdate path = '/pets/:id/edit'/>
        </Router>
      </header>
    </div>
  );
}

export default App;
