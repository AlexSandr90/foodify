import React, { useState } from "react";
import './app.scss';
import {
    Route,
    Switch,
    Redirect,
    HashRouter
} from "react-router-dom";
import {
    storage,
    isEmptyStorage
} from "../../helpers/helpers";

import Header from "../header";
import RandomRecipe from "../random-recipe";
import FavoriteRecipes from "../favorite-recipe";
import {
    CustomPopup,
    CustomButton
} from  '../custom-elements';

const App = () => {

    const [popupFlag, setPopupFlag] = useState(false);

    const renderCondition = () => {
        if (isEmptyStorage('meal') && JSON.parse(storage.getItem('meal')).length !== 0) {
            return <FavoriteRecipes />
        } else {
            setPopupFlag(true);
            return <Redirect to='/' />
        }
    };

    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <div className="app">
                <Header />

                <CustomPopup
                    trigger={popupFlag}
                    setTrigger={setPopupFlag}
                >
                    <h3>Ваша коллекция любимых рецептов пуста! Пожалуйста, добавьте рецепт</h3>
                    <CustomButton
                        buttonClassName='card-btn'
                        handleClick={() => setPopupFlag(false)}
                    >
                        Добавить рецепт
                    </CustomButton>
                </CustomPopup>

                <main className='main-content'>
                    <Switch>

                        <Route
                            path='/'
                            render={() => <RandomRecipe />}
                            exact
                        />

                        <Route
                            path='/favorite'
                            exact
                        >
                            {renderCondition}
                        </Route>

                    </Switch>
                </main>

            </div>
        </HashRouter>
    );
};

export default App;