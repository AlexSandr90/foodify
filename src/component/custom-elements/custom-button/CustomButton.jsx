import React from 'react';

import './custom-button.scss';

const CustomButton = ({ handleClick, buttonClassName, children }) => {

    return (
        <button
            onClick={ handleClick }
            className={ buttonClassName }
        >
            { children }
        </button>
    )
};

export default CustomButton;
