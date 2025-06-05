import React, { useState } from 'react'
import Child from './child'

const Use = () => {
    const [cartitems,setcartItems]=useState([
        {id:1,name:"hp",price:50000,no:1},
        {id:2,name:"lenovo",price:40000,no:2},
        {id:3,nae:"dell",price:45000,no:3}
    ])
  return (
    <div>
      usememo example
      <Child cartitems={cartitems}/>
    </div>
  )
}

export default Use
