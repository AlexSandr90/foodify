import React, { useState } from 'react';
import AddCustomRecipe from '../add-custom-recipe';
import CustomButton from '../custom-button';
import { 
    handleChange, 
    randomID, 
    storage 
} from '../helpers/helpers';
import mock_img from '../../assets/images/mock-recipe-img.jpg';
import './custom-recipe-btn.scss';

const CustomRecipeBtn = () => {
    const [popupFlag, setPopupFlag] = useState(false);
    const [input, setInput] = useState('');
    const [text, setText] = useState('');

    const saveRecipeToLocalStorage = () => {
        if (!input || !text) {
            return;
        }

        let obj = {
            idMeal: `${randomID(1, 9999)}`,
            strMeal: input,
            strMealThumb: mock_img,
            strInstructions: text
        };
        let tempArr = [...JSON.parse(storage.meal), obj];
        storage.setItem('meal', JSON.stringify(tempArr));
        setPopupFlag(false);
    };

    return (
        <>
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
                        type='text'
                        placeholder='Dish title'
                        className='custom-dish_input'
                        onChange={event => handleChange(event, setInput)}
                    />
                    
                    <textarea
                        className='custom-dish_text-field'
                        name="dish description"
                        cols="30"
                        rows="10"
                        placeholder='Dish description...'
                        onChange={event => handleChange(event, setText)}
                    />

                    <CustomButton
                        buttonClassName='card-btn'
                        handleClick={() => saveRecipeToLocalStorage()}
                    >
                        Add custom dish    
                    </CustomButton>
                </form>
            </AddCustomRecipe>
        </>
    )
};

export default CustomRecipeBtn;