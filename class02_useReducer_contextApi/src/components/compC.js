import { Fragment, useContext } from "react";
import { dataContext} from "../App";
import { useHistory, useLocation, useParams} from "react-router-dom";
const CompC = () => {
    let data = useContext(dataContext);
    let history = useHistory();
    let params = useParams();
    let location = useLocation();
    console.log("params",params);
    console.log("location",location);
    

    console.log(data);
    const routHandler = () =>{
        history.push("/compA")
      }
 
  return (
    <Fragment>
      <h1>CompC</h1>
      <button onClick={routHandler}>CompA</button>
    </Fragment>
  );
};

export default CompC;
