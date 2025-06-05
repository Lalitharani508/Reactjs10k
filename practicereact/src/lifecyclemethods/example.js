// import React from "react";
// class Example extends React.Component{
//     constructor(){
//         super()
//         this.state={message:"hello"}

import { useEffect, useState } from "react"

//     }

//     componentDidMount() {
//         console.log("Component Mounted!");
//       }
    
//       componentDidUpdate() {
//         console.log("Component Updated!");
//       }
    
//       componentWillUnmount() {
//         console.log("Component Will Unmount!");
//       }
    
//       updateMessage = () => {
//         this.setState({ message: "Updated message!" });
//       };
//     render(){
//         return(
//             <div>
//             {this.setState.message}
//             <button onClick={this.updateMessage}>update here</button>
//             </div>
//         )
//     }
// }
// export default Example;


const Counterapp1=()=>{
    const [count,setc]=useState(0)

    function handle(){
        setc(count+1)

    }
    useEffect(()=>{
        console.log("component mounted")
        return ()=>{
            console.log("component will unmount")
        };
    },[])



    useEffect(()=>{
        if(count>0){
            console.log("component updated")
        }

    },[count])
    return(
        <>
        hiii
        <h2>count: {count}</h2>
        <button onClick={handle}>+</button>
        </>
    )
}
export default Counterapp1