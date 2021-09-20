import {storage} from "../../helpers";
import {ADD_RECIPE} from "../action-types";


const INITIAL_STATE = storage;

export const recipeReduce = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case ADD_RECIPE:
            return [...state.meal, action.payload];
        default:
            return state;
    }
};

