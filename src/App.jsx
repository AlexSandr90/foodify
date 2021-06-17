import React, {useState} from "react";
import './App.css';

function LiComponent(props) {
    console.log('>>> LiComponent STATE: ', props.state);
    console.log('>>> LiComponent PROPS: ', props);

     return (
        <>
            {
                props.state
                && props.state.meals
                && props.state.meals.length > 0
                && props.state.meals
                    .map(req =>
                        <li key={req.idMeal}>{req.strMeal}</li>
                    )
            }
        </>
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
