import React from 'react';
import './add-custom-recipe.scss';

const AddCustomRecipe = ({trigger, setTrigger, children}) => {

    return (trigger) ? (
        <div className='add-custom-recipe-form'>
            <div className='custom-recipe-inner'>
                <button
                    className='close-btn'
                    onClick={() => setTrigger(false)}
                >
                    &#215;
                </button>
                {children}
            </div>
        </div>
    ) : ''
};

export default AddCustomRecipe;