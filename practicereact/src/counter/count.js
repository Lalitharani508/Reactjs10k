import React, { useState } from "react";
export function Counter(){
    const [state,setSatet]=useState(0)
    function incerement(){
        setSatet(state+1)
    }
    return(
        <>

        <p>{state}</p>
        <button onClick={incerement}>clik</button>
        </>
    )
}