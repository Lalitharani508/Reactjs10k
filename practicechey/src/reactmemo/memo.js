import React from "react";
const Mycomponent=React.memo(function Mycomponent({name}){
    console.log("rendering.....")
    return(
        <><h1>reac memo example</h1>
        <h4>hello bache ::{name}</h4></>
    )
})
export default Mycomponent