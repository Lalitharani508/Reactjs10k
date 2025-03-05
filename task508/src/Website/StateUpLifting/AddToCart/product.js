import React from "react";
const Pro=({data,addtocart})=>{
    return(
       <div>
         {data.map(x=>{
            return(
                <div style={{border:"2px solid black"}}>
                    hello
                   <h1>{x.name}</h1>
                   <p>{x.price}</p>
                   <button onClick={()=>addtocart(x)}>AddToCart</button>
                </div>
            )
        })}
       </div>
    )
}
export default Pro;