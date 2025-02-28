import React, { use, useState } from "react";
// 2 functions for increment and decrement features
function Effect(){
    const [count,setCount]=useState(0)

   function inc(){
        setCount((x)=>x+1)
    };
   function dec(){
        setCount((x)=>x-1)
    }

    function Reset(){
        setCount(0)
    }
    return(
        <div>

            use state
            <button onClick={inc}>+</button>
            <p>{count}</p>

            <button onClick={dec}>-</button>
            <button onClick={Reset}>reset</button>


        </div>
    )
}
export{Effect,Effect1,Effect2,Effect3,Effect4,Effect5,Effect6,Effect7,Effect8

}

// Single  function for increment and decrement where we passing args as values

function Effect1(){
    const [count,setCount]=useState(0)
    function a(value){
        setCount((x)=>value+x)
    }
    return(
        <div>
            <h1>example 2 of hook use state
            </h1>
            {/* incresing +10 ==10 20 30 40 */}
            <button onClick={()=>a(10)}>+</button> 
            <p>{count}</p>
            {/* descreasing -1 9 8 7 6 */}
            <button onClick={()=>a(-1)}>-</button>

        </div>
    )

}

// Single function for increment and decrement and reset features with switch case where getting type of action based on parameter
function Effect2(){
    const [count,setCount]=useState(0)
     const handlecounter=(action)=>{
        switch(action){
            case "increment":setCount((inc)=>inc+1);
            break;
            case "decrement":setCount((dec)=>dec-1);
            break;
            case "reset":
                setCount(0);
                break;
            default:
                break;
        }
     }
   
    
    return(
        <div>
            <h1>example 3 of use setState</h1>
            <button onClick={()=>handlecounter("increment")}>increment</button>
            counter:{count}
            <button onClick={()=>handlecounter("decrement")}>decrement</button>
            <button onClick={()=>handlecounter("reset")}>RESET</button>


        </div>
    )

}

// Code for toggling events  ( ON / OFF )

function Effect3(){
    const [light,setlight]=useState(false);
    function lighthandler(){
        setlight(!light)
    }


    return(
        <div>
            <h1>example 4</h1>
            <p>{light ? "ON" :"OFF"}</p>
            <button onClick={lighthandler}>click me</button>
        </div>
    )
}
// Code for colorTheme ( black & white themes )

// Here im using, ternary operator to give respective colors to make ui look clear according to the theme
function Effect4(){
    const [theme,settheme]=useState(false)
    return(
        <div > 
            <h1>example 5 of use state for color change theme..</h1>
            <div style={{backgroundColor:theme?"purple":"yellow",
                
                padding:"100px"
            }}>            <button onClick={()=>settheme(!theme)}>click for theme</button>
            </div>

            <div>
                {/* <button onClick={()=>settheme(!theme)}>
                    {theme ? "white":"dark"}



                </button> */}
            </div>

        </div>
    )
}

function Effect5(){

    const [show,setshow]=useState(false)
    return(
        <div style={{backgroundColor:"grey",padding:"30px"}}> 
            <p>Show and hide code using useState hook</p>
            <h1>Example6</h1>
            <button onClick={()=>setshow(!show)}>click</button>
            <br></br>
            {show ? (
                <form>
                    <input tye="text" placeholder="emial here"></input>
                    <input type="text" placeholder="password here"></input>
                    <button>login</button>
                </form>
            ):""}
        </div>
    )
}

function Effect6(){
    const [color,setColor]=useState("")

    return(
        <div>
            <p>            Code for dynamic bg color changing by enter value in input tag
            </p>
            <h1>example 7</h1>
            <>
                <input type="text" placeholder="color here" value={color} onChange={(e)=>setColor(e.target.value)} ></input>
            </>
            <div style={{backgroundColor:color,padding:"100px"}}>hiiiiiii </div>



        </div>
    )
}


function Effect7(){
    const [color,setColor]=useState(0)
    function colorToggle(){
        const alphabet="ABCDEF0123456789";
        let hash="#";
        for(let i=0;i<=5;i++){
            const color=Math.floor(Math.random() *alphabet.length)
            setColor((hash+=alphabet[color]))
        }
        console.log(hash)
     }

    return(
        <div>
            <p>Random Bg color changing on clicking the react-app (whatsapp text status example)</p>
            <h1>example8</h1>
            <button onClick={colorToggle}>click</button>
            <div style={{backgroundColor:color,padding:"50px"}}></div>


        </div>
    )
}


// function Effect8(){
//     const [searchingitem,setsearchingitem]=useState("")
//     const [filterdata,searchfilterdata]=useState([])
//     const data=[
//         "pant",
//         "shirt",
//         "t-shirt",
//         "laptop",
//         "watch",
//         "mobile",
//         "jeans"
//     ]
//     const filteritems=(x)=>{
//         setsearchingitem(x);
//         if (x === ""){
//             searchfilterdata([])
//         }
//         else{
//             const filterelements= data.filter((item)=>{
//                 return item.toLowerCase().includes(x.toLowerCase())
//             })
//             searchfilterdata(filterelements)
//         }

//     }
//     return(
//         <div>
//             <p>Data array and 2 useState hooks ,one is for handling input value and another hook is used to handle the filteredData and simple functionality</p>
//             <h1>example9</h1>
            
//                 <input
//                     type="search"
//                     placeholder="search here"
//                     value={searchingItem}
//                     onChange={(e) => filterItems(e.target.value)}
//                     />
                
//                 {filterdata.map((x, index) => {
//                     return (
//                     <div key={index}>
//                         <h2>{x}</h2>
//                     </div>
                        
//         </div>
//     )
// }

const Effect8 = () => {
    const [searchingItem, setSearchingItem] = useState("");
    const [filteredData, setFilteredData] = useState([]);
  
  
    const data = [
      "shirt",
      "pant",
      "t-shirt",
      "joggers",
      "laptop",
      "mobile",
      "watch",
    ];
  
  
    const filterItems = (x) => {
      setSearchingItem(x);
      if (x === "") {
        setFilteredData([]);
      } else {
        const filterElements = data.filter((item) => {
          return item.toLowerCase().includes(x.toLowerCase());
        });
        setFilteredData(filterElements);
      }
    };
    return (
      <>
        <input
          type="search"
          placeholder="search here"
          value={searchingItem}
          onChange={(e) => filterItems(e.target.value)}
        />
        {filteredData.map((x, index) => {
          return (
            <div key={index}>
              <h2>{x}</h2>
            </div>
          );
        })}
      </>
    );
  };
  
  
  