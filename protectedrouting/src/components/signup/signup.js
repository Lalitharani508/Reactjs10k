
import React, { useState } from "react";
// import './signup.css'
const Signup = () => {
    const [signupdetails, setSignupDetails] = useState({ name: "", email: "", passWord: "" })
    // console.log(setSignupDetails)
    const [allusers, setAllusers] = useState([])
    console.log(signupdetails)
    const handleDetails = (e) => {
        setSignupDetails({ ...signupdetails, [e.target.name]: e.target.value })

    }
    // const handleSubmitbtn=(e)=>{
    //     e.preventDefault()
    //     localStorage.setItem("signupusers",JSON.stringify(signupdetails))
    //     alert("signup successfully done !!!")
    //     setSignupDetails({name:"",email:"",passWord:""})
    // }
     const handleSubmitbtn = (e) => {
        e.preventDefault()
        const allsignupuserdata = [...allusers, signupdetails]
        setAllusers(allsignupuserdata)
        localStorage.setItem("allusers", JSON.stringify(allsignupuserdata))
        setSignupDetails({name:"",email:"",passWord:""})
        alert("signup suceessfully done!!!")

    }

   console.log(allusers)
    return (
        <div>
            {/* <form className="formdiv">
                <input type="text" placeholder="name here" onChange={(e)=>setSignupDetails(e.target.value)}></input>
                <input type="email" placeholder="email here" onChange={(e)=>setSignupDetails(e.target.value)}></input>
                <input type="password" placeholder="password here" onChange={(e)=>setSignupDetails(e.target.value)}></input>
                <button>SignUp</button>

            </form> */}
            <form className="formdiv" onSubmit={handleSubmitbtn}>
                <input type="text" placeholder="name here" onChange={handleDetails} name="name" value={signupdetails.name}></input>

                <input type="email" placeholder="email here" onChange={handleDetails} name="email" value={signupdetails.email}></input>
                
                <input type="password" placeholder="password here" onChange={handleDetails} name="passWord" value={signupdetails.pass}></input>
                <button >SignUp</button>

            </form>
        </div>
    )
}
export default Signup