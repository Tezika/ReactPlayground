import React, { Component } from 'react';
import Recipe from './recipe';
import PropTypes from 'prop-types';
import './recipeList.css'

class RecipeList extends Component {
    
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    render() {
        const recipes = this.props.recipes.map((r, i) => {
            return <Recipe key={i} {...r} />
        });
        return (
            <div>
                <div className="recipe-list">
                    {recipes}
                </div>
            </div>
        );
    }
}

export default RecipeList;
