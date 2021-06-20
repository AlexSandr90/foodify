import React, { useState } from 'react';

import './random-recipe.scss';
import RecipeCard from "../recipe-card";
import Buttons from "../buttons";

let randomArr = [];

const RandomRecipe = props => {
    let storage = window.localStorage;
    const [state, setState ] = useState([]);

    console.log('state: ', state);
    console.log('>>>>>>> storage: ', storage);
    console.log('>>>>>>> storage OBJ: ', JSON.parse(storage.meal));
    const getRandomRecipe = () => {
        const apiSrc = "https://www.themealdb.com/api/json/v1/1/random.php";
        fetch(apiSrc)
            .then(res => res.json())
            .then(res => {
                let obj = {
                    idMeal: res.meals[0].idMeal,
                    strMeal: res.meals[0].strMeal,
                    strMealThumb: res.meals[0].strMealThumb,
                    strInstructions: res.meals[0].strInstructions,
                };
                console.log(res.meals[0].idMeal);
                console.log(obj);
                setState(obj);
            });
    };

    const saveRecipeToLocalStorage = () => {
        randomArr.push(state);
        let data = JSON.stringify(randomArr);
        storage.setItem("meal", data);


        console.log('storage save: ', JSON.parse(storage.getItem('meal')));
        console.log('randomArr save: ', randomArr);
    };

    return (
        <div className='random-card'>
            <RecipeCard
                key={state.idMeal}
                strMeal={state.strMeal}
                strMealThumb={state.strMealThumb}
                strInstructions={state.strInstructions}
            />
            <Buttons
                getRandomRecipe={getRandomRecipe}
                saveRecipeToLocalStorage={saveRecipeToLocalStorage}
            />
        </div>
    )
};

export default RandomRecipe;