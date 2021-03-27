import { constants } from "../constants";
import { middleware} from "../middlewares"

export class actions {
  static add = (payload) => {
    return async (dispatch) => {
      dispatch({
        type: constants.ADD,
        payload,
      });
    };
  };


  static fetchData = () => {
    return dispatch => {
      return middleware.fetchData(1).then(data=>{
        dispatch({type:"ADD",payload:data})
      }).catch(error => {
        console.log("error",error)
      })
    }
  }

  static subtract = (data) => {
    console.log("action ===> data", data);
    return {
      type: "subtract",
    };
  };

  static addProduct = (product) => {
    return {
      type: constants.ADD_PRODUCT,
      payload: product,
    };
  };
}
