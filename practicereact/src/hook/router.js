// // import React from "react";
// // const Jaya = () => {
// // //   const arr = ["lalli", "vish", "adhu", "malik", "hiiiiiiiiiii"];
// // //   const renderesdata = arr.map((x, index) => {
// // //     return <div key={index}>{x}</div>;
// // //   });

// // //   const data = arr.map((y, index) => {
// // //     return <div key={index}>{y}</div>;
// // //   });
// // //   const data1 = [
// // //     { id: 1, name: "Apple", price: "$1" },
// // //     { id: 2, name: "Banana", price: "$0.5" },
// // //     { id: 3, name: "Cherry", price: "$2" },
// // //   ];

// //   const products = [
// //     { id: 101, name: "Laptop", price: "$1000" },
// //     { id: 102, name: "Mobile", price: "$500" },
// //     { id: 103, name: "Tablet", price: "$300" },
// //   ];

// //   return (
// //     <>
// //       {products.map((x, index) => {
// //         return(
// //         <tbody style={{border:"1"}} key={index}>
// //           <tr>
// //             <td>${x.id}</td>
// //             <td>${x.name}</td>
// //             <td>${x.price}</td>

// //           </tr>
// //         </tbody>
// //       )
// //       })}
// //     </>
// //   );
// // };
// // export default Jaya;

// // import React from "react";
// // import { Ch } from "./j";
// //  export function K(){
// //     const users=[ { id: 1, name: "Vamsi", age: 26 },
// //         { id: 2, name: "Krishna", age: 30 }
// //     ]
// //     return(
// //         <>
// //         {users.map(x=>{
// //             return(
// //             <Ch key={x.id} name={x.name} age={x.age}/>

// //             )
// //         })}
// //         </>
// //     )
// //  }

// //code for toggel events bulb on

// // import React, { useState } from "react";

// //  const H=()=>{

// //     const [bulb,setbulb]=useState(true)
// //     const handlebtn=()=>{
// //         setbulb(!bulb)
// //     }
// //     return(
// //         <>
// //         <h2>usestate hook</h2>
// //         <p>{bulb?"ON":"OFF"}</p>
// //         <button onClick={handlebtn}> click here</button>
// //         </>
// //     )
// //  }
// //  export default H;

// //themes change
// import React, { use, useState } from "react";
// // const Theme=()=>{
// //     const [theme,settheme]=useState(true)
// //     function handletheme(){
// //         settheme(!theme)
// //     }
// //     return(
// //         <>
// //         <div style={{backgroundColor:theme?"red":"black",padding:"20px",border:"1px solid pink"}}></div>
// //        <div>
// //        <h1>theme change example</h1>
// //        <button onClick={handletheme}>click for theme change</button>
// //        </div>
// //         </>
// //     )
// // }
// // export default Theme

// // export default function Inpucolor() {
// //   const [color, setcolor] = useState("");
// //   const changeclor = (e) => {
// //     setcolor(e.target.value);
// //   };
// //   return (
// //     <>
// //       <h1>input color change</h1>
// //       <input
// //         type="text"
// //         placeholder="type a color name"
// //         value={color}
// //         onChange={changeclor}
// //       ></input>{" "}
// //       <br></br>
// //       <div style={{ backgroundColor: color, padding: "50px" }}></div>
// //     </>
// //   );
// // }

// // function Randomcolor(){
// //  const [clr,setclr]=useState(true)
// //  const clorChange=()=>{
// //     setclr()
// //  }
// //     return(
// //         <>
// //         <h1>
// //             random color

// //         </h1>
// //         <button onClick={clorChange}>colorchange</button>
// //         <p></p>
// //         <div style={{border:"2px solid orange" ,padding:"50px"}}></div>

// //         </>
// //     )

// // }
// // export {Randomcolor};

// // function Searcinput() {
// //   const [serach, setsearch] = useState("");
// //   const [filter, setfilter] = useState([]);

// //   const data = [
// //     "shirt",
// //     "pant",
// //     "t-shirt",
// //     "joggers",
// //     "laptop",
// //     "mobile",
// //     "watch",
// //   ];

// //   const filterItems = (x) => {
// //     setsearch(x);
// //     if (x === "") {
// //       setfilter([]);
// //     } else {
// //       let filterelem = data.filter((y) => {
// //         return y.toLowerCase().includes(y.toLowerCase());
// //       });
// //       setfilter(filterelem);
// //     }
// //   };
// //   return (
// //     <>
// //       <h1>serach input</h1>

// //       <input
// //         onChange={(e) => filterItems(e.target.value)}
// //         value={serach}
// //       ></input>
// //       <>
// //         {filterelem.map((x, index) => {
// //           return <div key={index}>{x}</div>;
// //         })}
// //       </>
// //     </>
// //   );
// // }
// // export { Searcinput };

// // const Searcinput = () => {
// //     const [searchingItem, setSearchingItem] = useState("");
// //     const [filteredData, setFilteredData] = useState([]);
  
  
// //     const data = [
// //       "shirt",
// //       "pant",
// //       "t-shirt",
// //       "joggers",
// //       "laptop",
// //       "mobile",
// //       "watch",
// //     ];
  
  
// //     const filterItems = (x) => {
// //       setSearchingItem(x);
// //       if (x === "") {
// //         setFilteredData([]);
// //       } else {
// //         const filterElements = data.filter((item) => {
// //           return item.toLowerCase().includes(x.toLowerCase());
// //         });
// //         setFilteredData(filterElements);
// //       }
// //     };
// //     return (
// //       <>
// //         <input
// //           type="search"
// //           placeholder="search here"
// //           value={searchingItem}
// //           onChange={(e) => filterItems(e.target.value)}
// //         />
// //         {data}
// //         {filteredData.map((x, index) => {
// //           return (
// //             <div key={index}>
// //               <h2>{x}</h2>
// //             </div>
// //           );
// //         })}
// //       </>
// //     );
// //   };
  
  
// //   export default App;
  
// // --------------------------------------------------------------------
// // task

// import React, { useState } from "react";

// const Task=()=> {
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState([]);
//   const [result, setResult] = useState([]);

//   const data = [
//     "shirt",
//     "pant",
//     "t-shirt",
//     "joggers",
//     "laptop",
//     "mobile",
//     "watch",
//   ];

//   const filterItems = () => {
//     if (search === "") {
//       alert("Please enter a search term.");
//       return;
//     }

//     const filterData = data.filter((item) =>
//       item.toLowerCase().includes(search.toLowerCase())
//     );

//     setFilter(filterData);

//     if (filterData.length === 0) {
//       setResult(["No matching items found."]);
//     } else {
//       setResult(filterData);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Search and Display Result</h1>

//       {/* Input Field */}
//       <input
//         type="text"
//         placeholder="Search for an item..."
//         onChange={(e) => setSearch(e.target.value)}
//         value={search}
//         style={{ padding: "8px", marginRight: "10px" }}
//       />

//       {/* Search Button */}
//       <button onClick={filterItems} style={{ padding: "8px 16px" }}>
//         Search
//       </button>

//       {/* Display Result */}
//       <h2>Results:</h2>
//       {result.map((item, index) => (
//         <div key={index} style={{ margin: "5px 0" }}>
//           {item}
//         </div>
//       ))}
//     </div>
//   );
// }

// export {Task};
