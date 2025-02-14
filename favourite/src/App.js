// import './App.css';
// function Favo(){
  
//     const family=[{
//       name:"Prasad",relation:"Father"},
//       {name:"lakshmi",relation:"Mother"},
//       {name:"chaitanya",relation:"brother"}];

//     const favmovie=
//       {title:"seethamma vaakitlo sirimalle chettu",
//         year:2013,
//         director:"Srikanth Adda",
//         streaming :"amazon"
//       };
//     const favdish={
//       dish:"pulihorra",
//       cusine:"indian food",
//       ingrediants:["pop","rice","curryleaves","nuts"]
//     }
//     const favplace={
//       city:"Temples",
//       loaction:"southindia",
//     }
//     return(
//       <div id="body">
//         <h1>My Family</h1>
//         <ul>
//           {family.map((member,index)=>(
//             <li> 
//               {member.name} - {member.relation}
//             </li>

//           ))}
//         </ul>

//         <h1>favourite movie</h1>
//         <p>{favmovie.title} which is released in the year of {favmovie.year} and directed by {favmovie.director}</p>
//         <h1>
//           favourite food
//         </h1>
//         <span>
//           {favdish.dish} which is {favdish.cusine} and ingrediants are {favdish.ingrediants.join(',')}
//         </span>

//         <h1>
//           favourite place
//         </h1>
//         <span>{favplace.city} in {favplace.loaction} </span>

//       </div>
//     )
    

// }
// export default Favo;


import React from "react";
import { Navbar1 } from "./components/website/navbar";
import { Carousel1 } from "./components/carousel/carousel";
import { Card1 } from "./components/cards/card";
import { Table1 } from "./components/table/tabel";
const App=()=>{
    return(
        <div>
            <Navbar1/>
            <Carousel1/>
            
            <Card1/>
            <Table1/>
        </div>
    )
}
export default App;