import React, { Component } from 'react';
import './RecipeApp.css';
import RecipeList from './components/recipeList';
import Nav from './components/nav'

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
          <Nav />
          <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;
