import React from "react";
import Signup from "./pages/signup/signup";
import Login from "./pages/Login/login";
import Footerr from "./protectedroutingSL/footer/footer";
import Navbarr from "./protectedroutingSL/navbar/navbar";
import Dashboard from "./protectedroutingSL/dashboard/dashboard";
import Proutes from "./protectedroutingSL/PRoutes/prouts";
import { Route, Routes } from "react-router-dom";
const App=()=>{
  return(
    <div>
        <Navbarr/>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
          {/* <Route path="dashboard" element={<Dashboard/>}></Route>
           */}
           <Route path="/dashboard" element={<Proutes ele={<Dashboard/>}/>}></Route>
        </Routes>
        <Footerr/>
        {/* <Signup/> */}
        {/* <Login/> */}

       
    </div>
  )
}
export default App;