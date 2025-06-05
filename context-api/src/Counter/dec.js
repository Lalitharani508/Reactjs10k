import React from 'react'
import { useContext } from 'react'
import { counterappcontext } from '../App'
const Dec = () => {
    const {count,setcount}=useContext(counterappcontext)
  return (
    <div>
      <button onClick={()=>setcount(count-1)}>-</button>
    </div>
  )
}

export default Dec
