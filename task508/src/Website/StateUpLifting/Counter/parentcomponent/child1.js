import React from "react";
const Child1=({SetC})=>{
    return(
        <div>
            <button onClick={()=>{SetC(x=>x+1)}}>+</button>
        </div>
    ) 
}
export default Child1;