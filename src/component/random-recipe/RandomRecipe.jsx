import React, {Fragment} from 'react';

import './random-recipe.scss';
import RecipeCard from "../recipe-card";
import Buttons from "../buttons";

const RandomRecipe = props => {

    return (
        <div className='random-card'>
            <RecipeCard/>
            <Buttons/>
        </div>
    )
};

export default RandomRecipe;