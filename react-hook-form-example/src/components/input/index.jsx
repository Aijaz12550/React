import { memo, forwardRef } from "react";

const Input = (props, ref) => {
    return <input className="common_input" {...props} ref={ref} />
}


export default memo(forwardRef(Input));