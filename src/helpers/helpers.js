import {GET_API} from "./constants";

let storage = window.localStorage;

const handleChange = (event, setter) => {
    setter(event.target.value);
};

const randomID = (min, max) => {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

const isEmptyStorage = key => !!storage.getItem(key);
const isEmptyObj = obj => {
    for (let key in obj) {
        return false;
    }

    return true;
};

const getRandomRecipe = localState => {
    fetch(GET_API)
        .then(res => res.json())
        .then(res => {
            const {
                idMeal,
                strMeal,
                strMealThumb,
                strInstructions
            } = res.meals[0];

            localState({
                idMeal,
                strMeal,
                strMealThumb,
                strInstructions
            });
        });
};

const saveRecipeToLocalStorage = (localState, setLocalState) => {
    if (isEmptyObj(localState)) {
        return;
    };

    if (!storage.getItem('meal')) {
        let temp = [];
        temp.push(localState);
        storage.setItem('meal', JSON.stringify(temp));
        getRandomRecipe(setLocalState);
    } else {
        let tempArr = [...JSON.parse(storage.meal), localState];
        storage.setItem("meal", JSON.stringify(tempArr));
        getRandomRecipe(setLocalState);
    }
};

export {
    storage,
    randomID,
    isEmptyObj,
    handleChange,
    isEmptyStorage,
    getRandomRecipe,
    saveRecipeToLocalStorage
}