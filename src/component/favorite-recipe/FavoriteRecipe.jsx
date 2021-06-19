import React from 'react';

import './favorite-recipe.scss';
import RecipeCard from "../recipe-card";

const FavoriteRecipe = props => {

    return (
        <div className='favorite-card'>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
        </div>
    )
};

export default FavoriteRecipe;