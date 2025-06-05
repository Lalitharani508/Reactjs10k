import React, { useContext } from 'react'
import { colorchangecontext } from '../App'

const Color = () => {
const {color,setcolor}=useContext(colorchangecontext)
console.log(color)
  return (
    <div>
      <h1 style={{backgroundColor:color,padding:"50px"}}>helo</h1>
    </div>
  )
}

export default Color
