
import { memo } from "react";

const Button = (props) => {
    return <button className="common_buton" > {props.title} </button>
}


export default memo(Button);