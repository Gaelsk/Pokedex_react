import React, { Component } from 'react';
import './App.css';
import './w3.css';
import Pokedex from './components/Pokedex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokedex />
      </div>
    )
  }
}

export default App;
