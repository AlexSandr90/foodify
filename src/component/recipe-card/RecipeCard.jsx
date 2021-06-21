import React from 'react';

import './recipe-card.scss'

const RecipeCard = props => {

    const {
        idMeal,
        strMeal,
        strMealThumb,
        strInstructions
    } = props;

    return (
        <div className='recipe-card' key={ idMeal }>
            <img
                src={ strMealThumb }
                alt={ strMeal }
                className='recipe-img'
            />
            <div className='card-info'>
                <h2 className='recipe-name'>
                    { strMeal }
                </h2>
                <p className='recipe-description'>
                    { strInstructions }
                </p>
            </div>
        </div>
    )
};

export default RecipeCard;



