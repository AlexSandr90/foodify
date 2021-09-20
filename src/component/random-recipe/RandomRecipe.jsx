import React, { useState } from 'react';

import './random-recipe.scss';
import RecipeCard from "../recipe-card";
import CustomButton from "../custom-elements/custom-button";
import {
    storage,
    isEmptyStorage,
    getRandomRecipe,
    saveRecipeToLocalStorage
} from "../../helpers";
import {CustomPopup} from "../custom-elements";

const RandomRecipe = () => {
    const [state, setState ] = useState([]);

    if (storage.length === 0 || !storage.getItem('meal')) {
        storage.setItem('meal', '[]');
        getRandomRecipe(setState);
    }

    const renderRecipe = () => {
        const meal = JSON.parse(storage.meal);
        if (state.length === 0 && isEmptyStorage('meal')) {
            return (
                <RecipeCard
                    key={meal[0]?.idMeal}
                    strMeal={meal[0]?.strMeal}
                    strMealThumb={meal[0]?.strMealThumb}
                    strInstructions={meal[0]?.strInstructions}
                />
            )
        }

        return (
            <RecipeCard
                key={state.idMeal}
                strMeal={state.strMeal}
                strMealThumb={state.strMealThumb}
                strInstructions={state.strInstructions}
            />
        )

    };


    return (
        <div className='random-card'>

            { renderRecipe() }

            <div className="buttons">
                <CustomButton
                    buttonClassName='card-btn'
                    handleClick={() => getRandomRecipe(setState)}
                >
                    Skip
                </CustomButton>

                <CustomButton
                    buttonClassName='card-btn'
                    handleClick={() => saveRecipeToLocalStorage(state, setState)}
                >
                    Like
                </CustomButton>
            </div>

        </div>
    )
};

export default RandomRecipe;