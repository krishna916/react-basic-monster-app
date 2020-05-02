import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Frankenstien',
          id: 'as'
        },
        {
          name: 'Dracula',
          id: 'asa'
        },
        {
          name: 'Zombie',
          id: 'asaa'
        },
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))
        }
      </div>
    );
  }
}

  

export default App;
