import React, { useCallback, useState } from "react";
// import Products from "./products";
import ProductList from "./products";
const A=()=>{

    const [search,setsearch]=useState("")
    function handleip(e){
        setsearch(e.target.value)
    }

    const filteredp=useCallback((prods)=>{
        return prods.filter((d)=>{
            d.name.toLowerCase().includes(search.toLowerCase())

        })
    },[search])
    return(
        <>
        <h1>product search</h1>
        <input type="text" value={search} onChange={handleip}/>
        <ProductList filtered={filteredp}/>


        </>
    )
}
export default A