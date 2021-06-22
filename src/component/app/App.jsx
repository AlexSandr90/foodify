import React from "react";
import './App.scss';
import Header from "../header";
import {
    Route,
    Switch,
    BrowserRouter as Router
} from "react-router-dom";
import RandomRecipe from "../random-recipe";
import FavoriteRecipes from "../favorite-recipe";

const App = () => {

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
                <Header/>

                <main className='main-content'>
                    <Switch>
                        <Route
                            path='/foodify'
                            render={() => <RandomRecipe/>}
                            exact
                        />

                        <Route
                            path='/foodify/favorite'
                            render={() => <FavoriteRecipes/>}
                            exact
                        />
                    </Switch>
                </main>

            </div>
        </Router>
    );
};

export default App;