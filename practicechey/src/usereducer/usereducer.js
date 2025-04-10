import React, { useReducer } from "react";
import { counterreducer } from "./createreducer";
const inititalstate={count:0}
export function Counter(){
    const [state,action]=useReducer(counterreducer,inititalstate)
    return(
        <>
        <h2>usereducer example</h2>
        <h2>count:{state.count}</h2>
        <button onClick={()=>action({type:'increment'})}>incre</button>
        <button onClick={()=>action({type:"decrement"})}>decre</button>
        </>
    )
}