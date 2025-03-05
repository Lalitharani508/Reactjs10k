import React, { useState } from "react";
const Login = () => {
    const [loginpdetails, setLoginDetails] = useState({ email: "", password: "" })
    const handleDetailslogin = (e) => {
        setLoginDetails({ ...loginpdetails, [e.target.name]: e.target.value })
    }
    const handlesubmitlogin = (e) => {
        e.preventDefault();
        const allusersfromLS = JSON.parse(localStorage.getItem("allusers"))
        const loginformdata = loginpdetails

        const userfound=allusersfromLS.find(x=>x.email===loginformdata.email&&x.password===loginformdata.password)

        if(userfound){
            alert("login successfully done")
            
        }else{
            alert(" invalid credentials")
        }
        console.log(loginformdata, "all logindata")
        console.log(allusersfromLS, "allusers from ls")


    }
    return (
        <div>
            login
            <form onSubmit={handlesubmitlogin}>
                <input type="email" placeholder="email here" onChange={handleDetailslogin} name="email" 

                ></input>

                <input type="password" placeholder="password here" onChange={handleDetailslogin} name="password" ></input>
                <button >login</button>
            </form>
        </div>
    )
}

export default Login;