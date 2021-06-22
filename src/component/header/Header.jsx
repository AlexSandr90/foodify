import React from 'react';

import './header.scss';
import MenuItem from "../menu-item";

const Header = () => {

    return(
        <header className="header">

            <nav className='nav'>
                <MenuItem
                    key='1'
                    path='foodify'
                    menuItemName='Random dish'
                />

                <MenuItem
                    key='2'
                    path='foodify/favorite'
                    menuItemName='Favorites'
                />
            </nav>

        </header>
    )
};

export default Header;