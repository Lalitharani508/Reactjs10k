import React, { useState } from 'react'
import Pro from './product'
import Cart from './cart'
const Api=()=>{
     const [cart,setCart]=useState([])
     const data=[
        {id:1,name:"laptop",price:10000},
        {id:2,name:"phone",price:500},
        {id:3,name:"watch",price:1500}
     ]
     const addtocart=(item)=>{
        setCart([...cart,item])
     }

     console.log(cart)
    return(
        <div>
            shopping cart
            <Pro data={data} addtocart={addtocart}/>
            <Cart cartitems={cart}/>

        </div>
    )
}
export default Api;