import React, { useState } from 'react';
import './favorite-recipe.scss';

import RecipeCard from "../recipe-card";
import AddCustomRecipe from "../add-custom-recipe";

const FavoriteRecipes = () => {
    let storage = window.localStorage;

    const [ text, setText ] = useState('');
    const [ input, setInput ] = useState('');
    const [ popupFlag, setPopupFlag ] = useState(false);

    const randomID = (min, max) => {
        return  Math.round(min - 0.5 + Math.random() * (max - min + 1));
    };

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

    const saveRecipeToLocalStorage = event => {
        event.preventDefault();
        let obj = {
            idMeal: randomID(1, 9999),
            strMeal: input,
            strInstructions: text,
            strMealThumb: 'https://lh3.googleusercontent.com/proxy/bScjZ5fwTM1-6tBBxJWNi7QSK5acwpfcM7i4kClRD8vJIEHMXZZzFzYO_HMCCYEbJLXUraHE1pY_PdQsZymdwBKx'
        };
        let tempArr = [...JSON.parse(storage.meal), obj];
        let data = JSON.stringify(tempArr);
        storage.setItem("meal", data);
        setPopupFlag(false);
    };

    const handleInput = event => {
        setInput(event.target.value);
    };

    const handleTextArea = event => {
        setText(event.target.value);
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
                            onChange={handleInput}
                        />
                        <textarea
                            className='custom-dish_text-field'
                            name="dish description"
                            cols="30"
                            rows="10"
                            placeholder='Dish description...'
                            onChange={handleTextArea}
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