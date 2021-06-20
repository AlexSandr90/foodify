import React from 'react';

import './add-custom-recipe.scss';

const AddCustomRecipe = props => {

    return (props.trigger) ? (
        <div className='add-custom-recipe-form'>
            <div className='custom-recipe-inner'>
                <button
                    className='close-btn'
                    onClick={() => props.setTrigger(false)}
                >
                    &#215;
                </button>
                {props.children}
            </div>
        </div>
    ) : ''
};

export default AddCustomRecipe;