import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './recipe.css';

class Recipe extends Component {
  static defaultProps = {
    title: "Paster",
    ingredients: ['flour', 'water'],
    instructions: "Mix them up",
    img: "https://pixabay.com/get/ea31b10628f3073ed1584d05fb1d4e97e07ee3d21cac104497f8c670aee8bdba_340.jpg"
  }

  static propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }

  render() {
    const { title, img, instructions } = this.props;
    const ingredients = this.props.ingredients.map((ing, index) => {
      return <li key={index}>{ing}</li>;
    });
    return (
      <div className="recipe-card">
                <div className="recipe-card-image">
                  <img src={img} alt={title}></img>   
                </div>
                <div className="recipe-card-content">
                    <h3 className="recipe-title">{title}</h3>
                    <h4>Ingredients:</h4>
                    <ul>
                      {ingredients}
                    </ul>
                    <h4>Instructions:</h4>
                    <p>{instructions}</p>
                </div>
              </div>
    );
  }
}

export default Recipe;