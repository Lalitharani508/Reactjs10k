import React, { use, useState } from "react";
const Senarioonoff=()=>{
    const [btn,setbtn]=useState(false)

function btnhandle(){
    setbtn(!btn)

}
    return(
        <>
        <p>{btn?"ON":"OFF"}</p>
        <button onClick={btnhandle}>{btn?"ON":"OFF"}</button>
        </>
    )
}
export default Senarioonoff



const SetTheme=()=>{
    const [theme,settheme]=useState(false)


function themechange(){
    settheme(!theme)


}
    return(
        <>
        <h1>theme change</h1>
        <div style={{backgroundColor:theme?"black":"red",padding:"50px"}}></div>

        <button onClick={themechange}>click</button>
        </>
    )
}
export {SetTheme,InputColor,Randombgcolor,FindTotal}



const InputColor=()=>{
    const [color,setcolor]=useState("")
    function changecolor(e){
        setcolor(e.target.value)
    }
    return(
        <>
        <h1>input color based on color key</h1>

        <input placeholder="enter here" value={color} onChange={changecolor}></input>
        <p></p>
        <div style={{border:"1px solid black",padding:"50px",backgroundColor:color}}></div>
        </>
    )
}



const Randombgcolor=()=>{
    const [r,setr]=useState('')
    // const randomcolor=
    function random(){
        const alphabets="ABCDEF0123456789"
        let hash='#'
        for(let i=0;i<=5;i++){
            const color1=Math.floor(Math.random()*alphabets.length)
            setr(hash+=alphabets[color1])
        }
        console.log(hash)
    }
    return(
        <>
        <h1>random bg color</h1>
        <button onClick={random}>generate random color</button>
        <p></p>
        <div style={{border:"1px solid red",padding:"50px",backgroundColor:r}}></div>

        
        </>
    )
}


const FindTotal=()=>{
    const [item,setitem]=useState("")
    const [price,setprice]=useState("")
    const [total,settotal]=useState("")
    return(
        <>
        <h1>take 3 inputs item,price,total</h1>
        <input placeholder="enter item count" value={item} onChange={(e)=>setitem(e.target.value)}></input>
        <input placeholder="enter price" value={price} onChange={(e)=>setprice(e.target.value)}></input>
        <input placeholder="enter total" value={total} ></input>

        </>
    )
}