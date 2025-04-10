import React from "react";
import UserContext from "./usecontext";
import Navbar1 from "./navbar";
import Dashboard from "./dashboard";
const App1=()=>{
    const usersdata={
        name:"alice",
        role:"developer"
    }
    return(
        <>
        <UserContext.Provider value={usersdata}>
            <Navbar1/>
            <Dashboard/>
        </UserContext.Provider>
        </>
    )
}
export default App1