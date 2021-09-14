import React, { useState } from "react";
import './app.scss';
import Header from "../header";
import {
    Route,
    Switch,
    Redirect,
    HashRouter
} from "react-router-dom";
import RandomRecipe from "../random-recipe";
import FavoriteRecipes from "../favorite-recipe";

import {
    storage,
    isEmptyStorage
} from "../../helpers/helpers";
import CustomButton from "../custom-elements/custom-button";
import CustomPopup from "../custom-elements/custom-popup";

const App = () => {

    const [ popupFlag, setPopupFlag ] = useState(false);

    const needAddRecipe = () => {
        return (
            <CustomPopup
                trigger={popupFlag}
                setTrigger={setPopupFlag}
            >
                <h3>Ваша коллекция любимых рецептов пуста! Пожалуйста, добавьте рецепт</h3>
                <CustomButton
                    buttonClassName='card-btn'
                    handleClick={() => setPopupFlag(false)}
                >
                    Add custom dish
                </CustomButton>
            </CustomPopup>
        )
    };

    const renderCondition = () => {
        if ( isEmptyStorage('meal') && JSON.parse( storage.getItem('meal') ).length !== 0) {
            return <FavoriteRecipes/>
        } else {
            // alert('Пожалуйста, добавьте рецепт');
            setPopupFlag(true);
            needAddRecipe();
            return <Redirect to='/'/>
        }
    };

    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <div className="app">
                <Header/>

                <main className='main-content'>
                    <Switch>

                        <Route
                            path='/'
                            render={() => <RandomRecipe/>}
                            exact
                        />

                        <Route
                            path='/favorite'
                            exact
                        >
                            { renderCondition }
                        </Route>

                    </Switch>
                </main>

            </div>
        </HashRouter>
    );
};

export default App;