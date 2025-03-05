import React from "react";
import { Link, useParams,Outlet } from "react-router-dom";
const Singlep=({data})=>{
   
    const {id}=useParams()
    

    const itemfound=data.find((x)=>x.id === parseInt(id))
    if (!itemfound){
        return <h2>product not found</h2>
    }
    console.log(itemfound,"item found")
    return(
        <div style={{border:"2px solid black", padding:"10px", marginTop:"20px", width:"400px"}}>
        
            <img src={itemfound.image} alt={itemfound.name} width={200}></img>
            <h3>{itemfound.name}</h3>
            <p>product id: {itemfound.id}</p>
            <div style={{display:"flex",gap:"20px"}}>
                <Link to={`/products/${itemfound.id}/ingredients`}>Ingrediants</Link>
                <Link to={`/products/${itemfound.id}/instructions`}>Instructions</Link>
            </div>
            <Outlet context={itemfound}/>
        </div>
    )
}
export default Singlep;