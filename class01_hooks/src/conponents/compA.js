import { Fragment , memo} from "react"
import { CompB } from "./compB";

export const CompA = memo((props) => {

    console.log("====> comp A");
    return (
      <Fragment>
        <h1>Comp A</h1>
        <span>value from parent component {props.name}</span>
        <CompB  name = {props.name}/>
      </Fragment>
       
    )
})