import React from 'react';
import './custom-popup.scss';

const CustomPopup = ({trigger, setTrigger, children}) => {

    return (trigger) ? (
        <div className='custom_popup-form'>
            <div className='custom_popup-inner'>
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

export default CustomPopup;