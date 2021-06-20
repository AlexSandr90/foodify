import React from "react";
import './App.scss';
import Header from "../header";
import {
    Route,
    Switch,
    BrowserRouter
} from "react-router-dom";
import RandomRecipe from "../random-recipe";
import FavoriteRecipes from "../favorite-recipe";

const App = () => {

    // const saveRecipeToLocalStorage = () => {
    //     randomArr.push(state);
    //     let data = JSON.stringify(randomArr);
    //     storage.setItem("meal", data);
    //
    //
    //     console.log('storage save: ', JSON.parse(storage.getItem('meal')));
    //     console.log('randomArr save: ', randomArr);
    // };
    //
    // const readRecipeFromLocalStorage = () => {
    //     const obj = JSON.parse(storage.getItem('meal'));
    //     console.log('readRecipeFromLocalStorage obj: ', obj);
    //     setState(obj);
    // };

    return (
        <BrowserRouter>
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
                            render={() => <FavoriteRecipes/>}
                            exact
                        />
                    </Switch>
                </main>

            </div>
        </BrowserRouter>
    );
};

export default App;