import React from "react";
const Child2=({SetC})=>{
    return(
        <div>
            <button onClick={()=>{SetC(prev=>prev-1)}}>-</button>
        </div>
    )
}
export default Child2; 