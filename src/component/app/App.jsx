import React from "react";
import './App.scss';
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
    isEmpty,
    storage
} from "../helpers/helpers";

const App = () => {

    const renderCondition = () => {
        if ( (isEmpty('meal') && JSON.parse( storage.getItem('meal') ).length !== 0) === true) {
            return <FavoriteRecipes/>
        } else {
            return <Redirect to='/'/>
        }
    };

    console.log(isEmpty() && JSON.parse(storage.getItem('meal')).length !== 0);

    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <div className="App">
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