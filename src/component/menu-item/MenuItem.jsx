import React from 'react';
import { NavLink } from "react-router-dom";

import './menu-item.scss';

const MenuItem = props => {

    const {
        id,
        path,
        menuItemName
    } = props;

    return (
        <li key={ id } className='nav-item'>
            <NavLink
                to={`/${ path }`}
                exact
                activeClassName='active-recipe'
                className='item'
            >
                { menuItemName }
            </NavLink>
        </li>
    )
};

export default MenuItem;