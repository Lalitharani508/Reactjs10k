import React, { useContext } from 'react'
import { receipeexample } from '../App'
const Recipe = () => {
    const {data}=useContext(receipeexample);
  return (
    <div>
      Recipe
      {data.map(x=>{
        return(
            <>
            <h1>{x.name}</h1>
            <button>add to cart</button>
            </>
        )
      })}
    </div>
  )
}

export default Recipe
