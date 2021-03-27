import { createStore, combineReducers, applyMiddleware } from "redux";
// import { reducer, productsReducer} from "../reducers"
import * as reducers from "../reducers";
import thunk from "redux-thunk"


let allReducers = combineReducers(reducers);

export const store = createStore(allReducers,applyMiddleware(thunk));