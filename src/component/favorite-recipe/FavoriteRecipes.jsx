import React from 'react';
import './favorite-recipe.scss';
import RecipeCard from "../recipe-card";
import { storage } from "../../helpers/helpers";

const FavoriteRecipes = () => {

    return (
        <div className='favorite-card'>
            {
                JSON.parse(storage.meal).map(
                    ({ idMeal, strMeal, strMealThumb, strInstructions }) => (
                        <RecipeCard
                            key={idMeal}
                            strMeal={strMeal}
                            strMealThumb={strMealThumb}
                            strInstructions={strInstructions}
                        />
                    )
                )
            }
        </div>
    )
};

export default FavoriteRecipes;