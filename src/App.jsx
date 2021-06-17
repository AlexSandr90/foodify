import React, {Fragment, useState} from "react";
import './App.css';

function LiComponent(props) {
    console.log('>>> LiComponent STATE: ', props.state);
    // console.log('>>> LiComponent STATE: ', props.state);
    console.log('>>> LiComponent PROPS: ', props);
// debugger
     return (
        <Fragment>
            {
                // props.state
                // && props.state.meals
                // && props.state.meals.length > 0
                // && props.state.meals
                //     .map(req =>
                //         <li key={req.idMeal}>{req.strMeal}</li>
                //     )
                props.state && props.state.length > 0 && props.state.map(item => {
                    console.log('>>> props.state.map.item = ', item);
                    console.log('>>> item.meals.strMeal = ', item.meals[0].strMeal);
                    console.log('>>> item.meals = ', item.meals[0]);
                    return (
                        <li key={item.meals[0].idMeal}>{item.meals[0].strMeal}</li>
                    )
                })
            }
        </Fragment>
    )
};

let randomArr = [];

function App() {
    let storage = window.localStorage;
    const [state, setState] = useState([]);

    console.log('state glob: ', state);
    console.log('randomArr glob: ', randomArr);

    const getRandomRecipe = () => {

        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(res => res.json())
            .then(res => {
                setState(res);
            });
    };


    const saveRecipeToLocalStorage = () => {
        randomArr.push(state);
        let data = JSON.stringify(randomArr);
        storage.setItem("meal", data);


        console.log('storage save: ', JSON.parse(storage.getItem('meal')));
        console.log('randomArr save: ', randomArr);
    };


    const readRecipeFromLocalStorage = () => {
        // debugger
        const obj = JSON.parse(storage.getItem('meal'));
        console.log('readRecipeFromLocalStorage obj: ', obj);
        setState(obj);
    };

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={getRandomRecipe}>skip recipe</button>
                <button onClick={saveRecipeToLocalStorage}>save recipe</button>
                <button onClick={readRecipeFromLocalStorage}>show recipe to console</button>


                <ul>
                    <LiComponent state={state}/>
                </ul>
            </header>
        </div>
    );
}

export default App;
