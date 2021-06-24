import React, { useState } from 'react';

import './random-recipe.scss';
import RecipeCard from "../recipe-card";
import CustomButton from "../custom-button";
import {
    isEmpty,
    storage,
    getRandomRecipe,
    saveRecipeToLocalStorage
} from "../helpers/helpers";

const RandomRecipe = props => {
    const [state, setState ] = useState([]);

    if (storage.length === 0) {
        storage.setItem('meal', '[]');
        const apiSrc = "https://www.themealdb.com/api/json/v1/1/random.php";
        fetch(apiSrc)
            .then(res => res.json())
            .then(res => {
                const {
                    idMeal,
                    strMeal,
                    strMealThumb,
                    strInstructions
                } = res.meals[0];

                setState({
                    idMeal,
                    strMeal,
                    strMealThumb,
                    strInstructions
                });
            });
    }

    const renderRecipe = () => {
        const meal = JSON.parse(storage.meal);
        if (state.length === 0 && isEmpty('meal')) {
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