import { combineReducers } from "redux";

import { recipeReducer } from "./recipe-reducer";

const reducers = combineReducers({
    recipes: recipeReducer
});

export default reducers;