import React, { useState } from 'react';
import './favorite-recipe.scss';
import mock_img from '../../assets/images/mock-recipe-img.jpg'

import RecipeCard from "../recipe-card";
import AddCustomRecipe from "../add-custom-recipe";
import CustomButton from "../custom-button";
import {
    storage,
    randomID,
    handleChange
} from "../helpers/helpers";


const FavoriteRecipes = () => {
    const [ text, setText ] = useState('');
    const [ input, setInput ] = useState('');
    const [ popupFlag, setPopupFlag ] = useState(false);

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
            idMeal: `${randomID(1, 9999)}`,
            strMeal: input,
            strMealThumb: mock_img,
            strInstructions: text
        };
        let tempArr = [...JSON.parse(storage.meal), obj];
        storage.setItem("meal", JSON.stringify(tempArr));
        setPopupFlag(false);
    };

    return (
        <div className='favorite-card'>

            <div className='add-custom-recipe'>
                <CustomButton
                    buttonClassName='card-btn card-position size'
                    handleClick={() => setPopupFlag(true)}
                >
                    Add custom dish
                </CustomButton>

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
                            onChange={(event) => handleChange(event, setInput)}
                        />
                        <textarea
                            className='custom-dish_text-field'
                            name="dish description"
                            cols="30"
                            rows="10"
                            placeholder='Dish description...'
                            onChange={event => handleChange(event, setText)}
                        >

                        </textarea>

                        <CustomButton
                            buttonClassName='card-btn'
                            handleClick={event => saveRecipeToLocalStorage(event)}
                        >
                            Add custom dish
                        </CustomButton>

                    </form>
                </AddCustomRecipe>

            </div>

            <div className="cards">
                { cardsRecipe }
            </div>


        </div>
    )
};

export default FavoriteRecipes;