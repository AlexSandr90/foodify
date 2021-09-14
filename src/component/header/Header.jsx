import React from 'react';

import './header.scss';
import MenuItem from "../menu-item";
import CustomRecipeBtn from '../custom-recipe-btn/CustomRecipeBtn';

const Header = () => {

    return(
        <header className="header">

            <nav className='nav'>
                <MenuItem
                    key='1'
                    path=''
                >
                    Random dish
                </MenuItem>

                <MenuItem
                    key='2'
                    path='favorite'
                >
                    Favorites
                </MenuItem>

                <CustomRecipeBtn/>
            </nav>

        </header>
    )
};

export default Header;