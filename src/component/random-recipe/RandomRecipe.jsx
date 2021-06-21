import React, { useState } from 'react';

import './random-recipe.scss';
import RecipeCard from "../recipe-card";
import CustomButton from "../custom-button";
import {
    getRandomRecipe,
    saveRecipeToLocalStorage
} from "../helpers/helpers";

const RandomRecipe = props => {
    const [state, setState ] = useState([]);

    return (
        <div className='random-card'>
            <RecipeCard
                key={state.idMeal}
                strMeal={state.strMeal}
                strMealThumb={state.strMealThumb}
                strInstructions={state.strInstructions}
            />

            <div className="buttons">
                <CustomButton
                    buttonClassName='card-btn'
                    handleClick={(event) => getRandomRecipe(event, setState)}
                >
                    Skip
                </CustomButton>

                <CustomButton
                    buttonClassName='card-btn'
                    handleClick={(event) => saveRecipeToLocalStorage(event, state)}
                >
                    Like
                </CustomButton>
            </div>

        </div>
    )
};

export default RandomRecipe;