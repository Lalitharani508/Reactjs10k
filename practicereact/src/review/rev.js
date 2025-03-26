// import React from "react";
// function App1(){
//     const arr=[1,2,342.1,2.1]

//     return(
//         <div>
//             <h1>hello</h1>
//             {arr.map((k,index)=>{
//                 return(
//                     <div key={index}
//                     >
//                         {k}
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }
// export default App1




export function Hello() {
    const data = [
        {
          id: 1,
          name: "Apple",
          price: "$1",
          details: { color: "Red", weight: "200g" }
        },
        {
          id: 2,
          name: "Banana",
          price: "$0.5",
          details: { color: "Yellow", weight: "150g" }
        },
        {
          id: 3,
          name: "Cherry",
          price: "$2",
          details: { color: "Red", weight: "10g" }
        }
      ];
     
  return (
    <>
      <h1 className="hello">hello</h1>
      {data.map((x,index)=>{
        return (
            <div key={index}>
                <h1>{x.name}</h1>
                <p>{x.price}</p>
                <span>{x.id}</span><br/>
                <span>{x.details.color}</span>
            </div>
        )
      })}
    </>
  );
  }
  

