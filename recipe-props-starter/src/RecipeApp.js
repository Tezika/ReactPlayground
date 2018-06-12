import React, { Component } from 'react';
import logo from './logo.svg';
import './RecipeApp.css';
import Recipe from './components/recipe';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Recipe title="Paster"
                ingredients={['flour', 'water']}
                instructions="Mix them up"
                img="https://pixabay.com/get/ea31b10628f3073ed1584d05fb1d4e97e07ee3d21cac104497f8c670aee8bdba_340.jpg"
        />
      </div>
    );
  }
}

export default RecipeApp;
