import { constants } from "../constants"

export class actions {

    static add = (data) =>{
        console.log("action ===> data",data)
        return{
            type: constants.ADD,
            pauload: {name:"test"}
        }
    }
    
    
    static subtract = (data) =>{
        console.log("action ===> data",data)
        return{
            type:"subtract"
            
        }
    }

    static addProduct = (product) => {
        return {
            type: constants.ADD_PRODUCT,
            payload: product
        }
    }
}