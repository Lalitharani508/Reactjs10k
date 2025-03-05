import React from "react";
import { useOutletContext } from "react-router-dom";
const Singlepingrediants=()=>{
    console.log(useOutletContext)
    const product=useOutletContext()
    console.log(product)
    return(
        <div>
            {product.ingredients.map(x=>{
                return(
                    <>
                    
                    {x}
                    <br/>
                    </>
                )
            })}
        </div>
    )
}
export default Singlepingrediants;