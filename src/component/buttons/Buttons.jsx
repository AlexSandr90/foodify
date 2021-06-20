import React from 'react';

import './buttons.scss';

const Buttons = ({ getRandomRecipe, saveRecipeToLocalStorage }) => {

    return (
        <div className="buttons">
            <button
                onClick={ getRandomRecipe }
                className='card-btn'
            >
                Skip
            </button>

            <button
                onClick={ saveRecipeToLocalStorage }
                className='card-btn'
            >
                Like
            </button>
        </div>
    )
};

export default Buttons;
