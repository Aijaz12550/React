import { Fragment , memo, useContext} from "react"
import { context } from "../App";

export const CompC = memo(() => {

    let valueFromContext = useContext(context);

    console.log("valueFromContext",valueFromContext);

    console.log("====> comp A");
    return (
      <Fragment>
        <h1>Comp =C</h1>
        <span>value from parent component </span>
      </Fragment>
       
    )
})