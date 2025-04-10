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
export {SetTheme,InputColor,Randombgcolor,FindTotal,FakeApi}



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
    const [quantity,setquantity]=useState("")
    const [price,setprice]=useState("")
    const [total,settotal]=useState("")

    const handletotal=()=>{
        settotal(Number(quantity*price))
    }
    return(
        <>
        <h1>take 3 inputs quantity,price,total</h1>
        <input placeholder="enter item count" value={quantity} onChange={(e)=>setquantity(e.target.value)}></input>
        <input placeholder="enter price" value={price} onChange={(e)=>setprice(e.target.value)}></input>
        <input placeholder="enter total" value={total} ></input>
        <button onClick={handletotal}>Total</button>

        </>
    )
}




//category wise data display using fake store api
const FakeApi=()=>{
        

    function getData(){

    }
    return(
        <>
        <h1>        fakestore api
        </h1>
        <button onClick={getData}>get data</button>
        <button>mens category</button>
        <button>women category</button>
        <button>rating</button>

        </>
    )

}

const data=[
    {id:1,name:"electronics",subcat:[
        {id:101,name:"laptop",price:50000},
        {id:102,name:"watch",price:10000},
        {id:103,name:"pad",price:12000},
        {id:104,name:"pods",price:10000},
    ]
},
{
    id:2,name:"fashion",subcat:[
        {id:201,name:"lipstick",price:5000},
        {id:202,name:"eyeliner",price:15000},
        {id:203,name:"shades",price:500},
        {id:204,name:"nail polish",price:510},

    ]
}
,
{
    id:3,name:"dresses",subcat:[
        {id:301,name:"t-shirts",price:5000},
        {id:302,name:"shirts",price:15000},
        {id:303,name:"tracks",price:500},
        {id:304,name:"jeans",price:510},

    ]
},
{
    id:4,name:"household",subcat:[
        {id:401,name:"tabel",price:5000},
        {id:402,name:"utensils",price:15000},
        {id:403,name:"mirror",price:500},
        {id:404,name:"napkins",price:510},

    ]
}
]
const FilterCatAddtoCart1=()=>{
   
    console.log(data)


    const [expandcat,setexpandcat]=useState(null)
    const [selectcat,setselectcat]=useState(null)
    const [cart,setcart]=useState([])

    function handlecat(catid){
        setexpandcat((x)=>(x===catid)?null:(catid))
    }
    return(
        <div>
            <div style={{display:"flex",gap:"10px",border:"2px solid black", margin:"10px"}}>
                <div style={{border:"1px solid black",padding:"20px",margin:"20px"}}>
                    <h2 style={{fontSize:"30px"}} >catgories</h2>
                    {data.map((cat)=>(
                        <div style={{border:"1px solid black", padding:"5px", margin:"5px"}} onClick={()=>handlecat(cat.id)}>{cat.name}</div>
                    ))}
                 


                </div>
                <div style={{border:"1px solid black",padding:"20px",margin:"20px" ,width:"80%"}}>
                    <h2>products</h2>
                    <div>
                        
                    </div>
                </div>

            </div>

            <div style={{width:"80%" ,border:"1px solid black",padding:"60px", margin:"10px"}}>add to cart</div>
        </div>
    )
}
export { FilterCatAddtoCart1};