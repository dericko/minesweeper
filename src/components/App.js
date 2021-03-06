import React, { Component } from 'react';

import GameDisplay from '../containers/GameDisplay';
import Board from '../containers/Board';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Minesweeper</h1>
        </header>
        <GameDisplay />
        <Board />
      </div>
    );
  }
}

export default App;
