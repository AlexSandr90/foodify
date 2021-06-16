import React, {useState} from "react";
import './App.css';

function LiComponent(props) {
    return (
        <ul>
            {
                props.state
                && props.state.meals
                && props.state.meals.length > 0
                && props.state.meals
                    .map(req =>
                        <li key={req.idMeal}>{req.strMeal}</li>
                    )
            }
        </ul>
    )
};


function App() {
    let storage = window.localStorage;
    const [state, setState] = useState([]);

    const getRandomRecipe = () => {

        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(res => res.json())
            .then(res => setState(res));
    };


    const saveRecipeToLocalStorage = () => {
        let data = JSON.stringify(state);
        storage.setItem("meal", data);
    };

    // const saveRecipeToLocalStorage = () => {
    //     const newState = state + getRandomRecipe();
    //     setState(newState);
    //     // Get the currently stored clicks from local storage
    //     const clicks = JSON.parse(localStorage.getItem("data2")) ?? [];
    //     clicks.push(newState);
    //     localStorage.setItem("data2", JSON.stringify(newState));
    // };

    const readRecipeFromLocalStorage = () => {
        const obj = JSON.parse(storage.getItem('meal'));
        setState(obj);
    };

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={getRandomRecipe}>skip recipe</button>
                <button onClick={saveRecipeToLocalStorage}>save recipe</button>
                <button onClick={readRecipeFromLocalStorage}>show recipe to console</button>

                <LiComponent state={state}/>
            </header>
        </div>
    );
}

export default App;
