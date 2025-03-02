import React from "react";
import { useParams } from "react-router-dom";
const Singlep=({data})=>{
   
    const {id}=useParams()
    

    const itemfound=data.find((x)=>x.id === parseInt(id))
    if (!itemfound){
        return <h2>product not found</h2>
    }
    console.log(itemfound,"item found")
    return(
        <div style={{border:"2px solid black", padding:"10px", marginTop:"20px"}}>
        
            <img src={itemfound.image} alt={itemfound.name} width={200}></img>
            <h3>{itemfound.name}</h3>
            <p>product id: {itemfound.id}</p>
        </div>
    )
}
export default Singlep;