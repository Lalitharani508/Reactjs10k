import React from "react";
const Cart=({cartitems})=>{
    return(
        <div>
           {cartitems.map(x=>{
            return(
                <div>
                    {x.name}
                </div>
            )
           })}
        </div>
    )
}
export default Cart;