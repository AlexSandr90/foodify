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

export {
    getRandomRecipe,

}