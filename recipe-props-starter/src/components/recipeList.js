import React, { Component } from 'react';
import Recipe from './recipe';
import PropTypes from 'prop-types';
import './recipeList.css'

class RecipeList extends Component {
    static defaultProps = {
        recipes: [{
                title: "Spaghetti",
                instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
                ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
                img: "https://pixabay.com/get/e832b10b28e90021d85a5854ee4d459fe270e7c818b413499df8c17eaeea_340.jpg"
            },
            {
                title: "Milkshake",
                instructions: "Combine ice cream and milk.  Blend until creamy",
                ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
                img: "https://pixabay.com/get/e835b30e28f6063ed1584d05fb1d4e97e07ee3d21cac104497f8c971a7e5b7bb_340.jpg"
            },
            {
                title: "Avocado Toast",
                instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
                ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
                img: "https://farm3.staticflickr.com/2847/12565663524_f4aa12a246.jpg"
            },
            {
                title: "Avocado Toast",
                instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
                ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
                img: "https://farm3.staticflickr.com/2847/12565663524_f4aa12a246.jpg"
            }
        ]
    }

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
