import { Fragment , memo} from "react"
import { CompC } from "./compC";

export const CompB = memo(() => {

    console.log("====> comp A");
    return (
      <Fragment>
        <h1>Comp =B</h1>
        <span>value from parent component</span>
        <CompC />
      </Fragment>
       
    )
})