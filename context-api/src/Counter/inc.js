import React from 'react'
import { useContext } from 'react'
import { counterappcontext } from '../App'

const Inc = () => {
    const {count,setcount}=useContext(counterappcontext)
  return (
    <div>
      <button onClick={()=>setcount(count+10)}>+</button>
    </div>
  )
}

export default Inc
