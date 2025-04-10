import React, { useContext } from "react";
import UserContext from "./usecontext";
const Dashboard=()=>{
    const usersdata=useContext(UserContext)
    return(
        <>
        <p>dashboard</p>
        <p>{usersdata.role}</p>
        </>
    )
}
export default Dashboard