import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav'

const Num_Card = 16;

class App extends Component {
  constructor(props) {
    super(props);
    const cards = Array.apply(null, Array(Num_Card)).map((c, i) => ({
      id: i,
      state: 0,
      color: 'grey'
    }));
    this.state = { cards };

    this.handleClicked = this.handleClicked.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleClicked(id) {

  }

  handleNewGame() {
    this.reset();
  }

  render() {
    return (
      <div className="App">
      <Nav onNewGame={this.handleNewGame}/>
      </div>
    );
  }

  reset() {
    alert('The game has been reset now!');
  }
}

export default App;
