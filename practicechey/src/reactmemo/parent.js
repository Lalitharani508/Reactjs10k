import React, { useState } from "react";
import Mycomponent from "./memo";
export function Reactmemo(){
    const [count,setcount]=useState(0)
    return(
        <>
        <Mycomponent name="sai"/>

        <button onClick={()=>setcount(count+1)}>increment:{count}</button>

        </>
    )
}