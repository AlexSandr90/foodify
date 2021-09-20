import {storage} from "../../helpers";
import {ADD_RECIPE} from "../action-types";


const INITIAL_STATE = storage;

export const recipeReducer = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case ADD_RECIPE:
            return {meal: [...state.meal, action.payload]};
        default:
            return state;
    }
};

