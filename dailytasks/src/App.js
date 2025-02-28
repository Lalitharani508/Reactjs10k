// import React from "react";


// import { Parent, App1 } from "./pcComponents/task";
// // import App1 from "./pcComponents/task"
//   const App=()=>{
//     let objdata={
//       name:"Ram",
//       age:26,
//       location:"banglore",
//       job:"Tester"
//     };
  
//     return(
//       <div>
//         <Parent data={objdata}/>
//       </div>
//     )
//   }
//   export  {App};


//   // Passing an Array of Objects from Parent to Child

// const  arr=()=>{
//     const arrobj=[
//     {
//       name:"Ram",
//       age:26,
//       location:"banglore",
//       job:"Tester",
//       salary:600000

//     },{
//       name:"Ramya",
//       age:36,
//       location:"hyderabad",
//       job:"Developer",
//       salary:2500000

//     },
//     {
//       name:"Lalitha",
//       age:24,
//       location:"banglore",
//       job:"Software Engineer",
//       salary:5000000
//     }
//     ]
//   return(
//     <div>
//       <App1 details={arrobj}/>
//     </div>
//   )
// }
// export default arr;



import React from "react";
import { Signuplogin } from "./navbartaskwithsignupAndLogin/navbar";
 const App=()=>{
  return(
    <div>
      <Signuplogin/>
    </div>
  )
 }
 export default App;
