
const readRecipeFromLocalStorage = () => {
    const obj = JSON.parse(storage.getItem('meal'));
    console.log('readRecipeFromLocalStorage obj: ', obj);
    setState(obj);
};
