import React, { Component } from 'react';
import './RecipeApp.css';
import RecipeList from './components/recipeList';
import Nav from './components/nav';
import RecipeInput from './components/recipeInput'

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [{
          id: 1,
          title: "Spaghetti",
          instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
          ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
          img: "https://pixabay.com/get/e832b10b28e90021d85a5854ee4d459fe270e7c818b413499df8c17eaeea_340.jpg"
        },
        {
          id: 2,
          title: "Milkshake",
          instructions: "Combine ice cream and milk.  Blend until creamy",
          ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
          img: "https://pixabay.com/get/e835b30e28f6063ed1584d05fb1d4e97e07ee3d21cac104497f8c971a7e5b7bb_340.jpg"
        },
        {
          id: 3,
          title: "Avocado Toast",
          instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
          ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
          img: "https://farm3.staticflickr.com/2847/12565663524_f4aa12a246.jpg"
        }
      ],
      nextRecipeId: 4,
      showForm: false
    };

    this.handleSave = this.handleSave.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleNewRecipe = this.handleNewRecipe.bind(this);
  }

  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = { ...recipe, id: this.state.nextRecipeId };
      return {
        nextRecipeId: this.state.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe]
      }
    });
  }

  handleClose() {
    this.setState({ showForm: false });
  }

  handleNewRecipe() {
    this.setState({ showForm: true });
  }

  render() {
    return (
      <div className="App">
          <Nav onNewRecipe={this.handleNewRecipe}/>
          { this.state.showForm ? <RecipeInput onSave={this.handleSave} onClose={this.handleClose}/> : null }
          <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;