import React, { Component } from 'react';
import Recipe from './recipe';
import PropTypes from 'prop-types';
import './recipeList.css'

class RecipeList extends Component {
    
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
        onDelete: PropTypes.func.isRequired
    }

    render() {
        const recipes = this.props.recipes.map((r) => {
            return <Recipe key={r.id} {...r} onDelete={this.props.onDelete} />
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
