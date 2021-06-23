export let storage = window.localStorage;

export const handleChange = (event, setter) => {
    setter(event.target.value);
};

export const randomID = (min, max) => {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

export const isEmpty = key => storage.getItem(key) ? true : false;

export const saveRecipeToLocalStorage = (event, localState) => {
    event.preventDefault();
    if (!storage.getItem('meal')) {
        let temp = [];
        temp.push(localState);
        storage.setItem('meal', JSON.stringify(temp));
    } else {
        let tempArr = [...JSON.parse(storage.meal), localState];
        storage.setItem("meal", JSON.stringify(tempArr));
    }
};

export const getRandomRecipe = (event, localState) => {
    event.preventDefault();
    const apiSrc = "https://www.themealdb.com/api/json/v1/1/random.php";
    fetch(apiSrc)
        .then(res => res.json())
        .then(res => {
            const { idMeal, strMeal, strMealThumb, strInstructions } = res.meals[0];

            localState({
                idMeal,
                strMeal,
                strMealThumb,
                strInstructions
            });
        });
};