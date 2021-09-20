import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/root-reducer";

const store = createStore(reducers, composeWithDevTools());

export default store;