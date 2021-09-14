import React from 'react';
import { NavLink } from "react-router-dom";

import './menu-item.scss';

const MenuItem = props => {

    const {
        id,
        path,
        children
    } = props;

    return (
        <li key={ id } className='nav-item'>
            <NavLink
                to={`/${ path }`}
                exact
                activeClassName='active-recipe'
                className='item'
            >
                { children }
            </NavLink>
        </li>
    )
};

export default MenuItem;