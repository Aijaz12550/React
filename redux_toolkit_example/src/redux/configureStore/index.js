import { configureStore } from "@reduxjs/toolkit";
import testReducer from "../slices";


export const store = configureStore({
    reducer:{testReducer} 
});