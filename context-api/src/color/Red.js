import React, { useContext } from 'react'
import { colorchangecontext } from '../App'

const Red = () => {
    const {color,setcolor}=useContext(colorchangecontext)
  return (
    <div >
      <button onClick={()=>setcolor("red")}>red</button>
    </div>
  )
}

export default Red
