import React from "react";

// import "./product.css"
import { useNavigate } from "react-router-dom";

const Products = ({data}) => {
    const navigate=useNavigate()
    return (
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",padding:"0px 20px",gap:"20px"}}>
            {data.map(x=>{
                return(
                    <div onClick={()=>navigate(`/products/${x.id}`)} style={{width:"100%",padding:"20px",border:"1px solid black"}}>
                        <img src={x.image} alt="" width="100%"/>
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