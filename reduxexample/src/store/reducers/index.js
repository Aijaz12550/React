import { constants } from "../constants"
// first param contain the previous state

let initialState = []


export const reducer = (state=initialState, action) =>{
    console.log("state",state)
    switch(action.type){
        case constants.ADD:
            return [...state,action.payload]
        case "subtract":
            return state-1
        default:
            return state
    }
    
}

export const productsReducer = (state={},action) => {
    switch(action.type){
        case constants.ADD_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        default:
            return state
    }
}  

