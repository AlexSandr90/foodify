import React, { useState } from 'react';
import './App.css';

function App() {
    const [ state, setState ] = useState([]);
    const localState = [];
    let localFlag = false;

    const skip = () => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(responce => responce.json())
            .then(data => {
                console.log('Fetch data: ', data);
                console.log('meals name = ', data.meals.map(item => item.strMeal).join());
                setState(data.meals);
                return (
                    <ul>
                        <li>q</li>
                    </ul>
                );
            });
    };

    const Local = () => {
        debugger
        return (
            localState.map(item => {
                return (
                    <li>{item.strMeal}</li>
                )
            })
        )
    }

    console.log('>>> state = ', state);

    const like = () => {
        state.map(item => localState.push(item));
        console.log('>>>>>localState like = ', localState);
        return localState;
    };
    console.log('>>>>>>>>>>>> localState = ', localState);

    const renderLocal = () => {
        return !localFlag;
    };

    console.log('localFlag: ', localFlag);
    return (
        <div className="App">
            <header className='App-header'>

                <button onClick={skip}>Skip recipe</button>
                <button onClick={like}>Like recipe</button>
                <button onClick={renderLocal}>LOCAL</button>
                <ul>
                    { localFlag && Local }
                </ul>

            </header>
        </div>
    );
}

export default App;
