import React from 'react';

import './custom-button.scss';

const CustomButton = props => {

    return (
        <button
            onClick={props.handleClick}
            className={props.buttonClassName}
        >
            {props.children}
        </button>
    )
};

export default CustomButton;
