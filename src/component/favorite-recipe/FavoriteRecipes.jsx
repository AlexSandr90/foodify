import React, { useState } from 'react';
import './favorite-recipe.scss';

import RecipeCard from "../recipe-card";
import AddCustomRecipe from "../add-custom-recipe";

let randomArr = [];

const FavoriteRecipes = () => {
    let storage = window.localStorage;

    const [ popupFlag, setPopupFlag ] = useState(false);
    const [ state, setState ] = useState([]);


    const cardsRecipe = JSON.parse(storage.meal)
        .map(meal => {
            const {
                idMeal,
                strMeal,
                strMealThumb,
                strInstructions
            } = meal;

            return (
                <RecipeCard
                    key={idMeal}
                    strMeal={strMeal}
                    strMealThumb={strMealThumb}
                    strInstructions={strInstructions}
                />
            )
        });

    const saveRecipeToLocalStorage = (event) => {
        event.preventDefault();
        randomArr.push(state);
        let data = JSON.stringify(randomArr);
        storage.setItem("meal", data);
        setPopupFlag(false);

        console.log('storage save: ', JSON.parse(storage.getItem('meal')));
        console.log('randomArr save: ', randomArr);
    };

    return (
        <div className='favorite-card'>
            <div className='add-custom-recipe'>
                <button onClick={() => setPopupFlag(true)}>
                    Add custom dish
                </button>

                <AddCustomRecipe
                    trigger={popupFlag}
                    setTrigger={setPopupFlag}
                >
                    <h3>Add custom dish</h3>
                    <form className='custom-dish_form'>
                        <input
                            type="text"
                            placeholder='Dish title'
                            className='custom-dish_input'
                        />
                        <textarea
                            className='custom-dish_text-field'
                            name="dish description"
                            cols="30"
                            rows="10"
                            placeholder='Dish description...'
                        >

                        </textarea>
                        <button
                            className='card-btn'
                            onClick={event => saveRecipeToLocalStorage(event)}
                        >
                            Add custom dish
                        </button>
                    </form>
                </AddCustomRecipe>

            </div>
            {cardsRecipe}
        </div>
    )
};

export default FavoriteRecipes;