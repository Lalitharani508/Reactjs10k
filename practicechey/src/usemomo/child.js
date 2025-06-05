import React from 'react'

const Child = (cartitems) => {
    const totalamount=()=>{
        return cartitems.reduce((acc,cure)=>acc+cure.price * cure.no,0)
    }
  return (
    <div>
       amount: {totalamount()}
    </div>
  )
}

export default Child

// const array1=[1,2,3,4,5]
// // const inital_value=0
// const value=array1.reduce((acc,curre)=>acc+curre,)
// console.log(value)