import React from "react";

import "./product.css"
import { useNavigate } from "react-router-dom";

const Products = ({data}) => {
    const navigate=useNavigate()

  
   
    return (
        <div className="cardContainer">
            {data.map(x=>{
                return(
                    <div className="card" onClick={()=>navigate(`/products/${x.id}`)}>
                        <img src={x.image} alt=""/>
                        <p>{x.name}</p>
                        <span>{x.rating}</span>
                        <div>
                            <button>Ingrediants</button>
                            <button>Instructions</button>

                        </div>
                    
                    </div>
                )
            })}
        </div>
    )
}

export default Products;