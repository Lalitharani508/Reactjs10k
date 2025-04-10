import React, { useContext } from "react";
import UserContext from "./usecontext";
const Navbar1=()=>{
    const usersdata=useContext(UserContext)
    return(
        <><h1>welcome,{usersdata.name}</h1></>
    )
}
export default Navbar1