import React, { useState } from 'react'
import { useContext } from 'react'
import { counterappcontext } from '../App'

const Counter = () => {
    const {count,setcount}=useContext(counterappcontext)
    console.log(count)
  return (
    <div>
      {/* <button onClick={()=>setcount(x=>x+1)}>+</button>
      {count}
      <button onClick={()=>setcount(x=>x-1 )}>-</button> */}


      {count}
    </div>
  )
}

export default Counter
