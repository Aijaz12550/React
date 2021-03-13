import { createStore, combineReducers } from "redux";
// import { reducer, productsReducer} from "../reducers"
import * as reducers from "../reducers"


let allReducers = combineReducers(reducers)

export const store = createStore(allReducers);