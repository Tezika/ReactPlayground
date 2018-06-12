import React, {Component} from 'react';
import './recipe.css'

class Recipe extends Component {
      render(){
          const {title, img, instructions} = this.props;
          const ingredients = this.props.ingredients.map((ing, index) => {
             return <li key={index}>{ing}</li>;
          });
          return (
              <div classname="recipe-card">
                <div classname="recipe-card-img">
                  <img src={img} alt={title}></img>   
                </div>
                <div classname="recipe-card-content">
                    <h3 classname="recipe-title"> Recipe {title}</h3>
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