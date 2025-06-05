import React, { useContext } from 'react'
import { colorchangecontext } from '../App'

const Black = () => {
    const {color,setcolor}=useContext(colorchangecontext)
  return (
    <div >
      
      <button onClick={()=>setcolor("black")}>black</button>
    </div>
  )
}

export default Black
