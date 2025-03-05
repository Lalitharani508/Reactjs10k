import React from "react";
import { useOutletContext } from "react-router-dom";
const Singlepinstructions=()=>{
    const inst=useOutletContext()
    console.log(inst)
    return(
        <div>
            {inst.instructions.map(x=>{
                return(
                    <div>
                        {x}
                        </div>
                )
            })}
        </div>
    )
}
export default Singlepinstructions;