import React from "react";
import { Navigate } from "react-router-dom";
const Proutes=({ele})=>{
    const loggedinuser=JSON.parse(localStorage.getItem("loggedinuser"))
    return(
        <div>
            {loggedinuser ? ele:<Navigate to="/login"/>}




        </div>
    )
}
export default Proutes;