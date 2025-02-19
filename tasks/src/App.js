// import React from "react";
// import { Child } from "./practice/classbsedcompo";
// class App extends React.Component(){
//   render(){
//     console.log(React);
//     const data=[{id:1,name:"seetha"},{id:2,name:"madhu"},{id:3,name:"vishnu"}]
//     return(
//       <div>
//         {data.map(x=>{
//           return(
//             <div>
//         <Child person_name={x.name} person_id={x.id}/>
              
//               </div>
//           )
//         })}
//         hello hiiii
//       </div>
//     )
//   }
// }
// export default App;


// import React  from "react";
// // import Update from "./practice/update-useeffectlifecycle";
// import { Child } from "./practice/classbsedcompo";
// const App=()=>{
//   return(
//     <div>
//       {/* <Update/> */}
//       <Child/>
//     </div>
//   )
// }
// export default App;


import React  from "react";
import Parent from "./practice/classbsedcompo";
import { Example2 ,Example3,Example4,Example5} from "./practice/classbsedcompo";
const App=()=>{
  return(
    <div>
      <Parent/>
      <Example2></Example2>
      <Example3/>
      <Example4></Example4>
      <Example5/>
      
    
    </div>
  )
}
export default App;

