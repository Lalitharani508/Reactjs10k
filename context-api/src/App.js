// import React, { useContext, useState } from 'react'
// import { createContext } from 'react'
// // import Counter from './Counter/Counter'
// // import Inc from './Counter/inc'
// // import Dec from './Counter/dec'
// // export const counterappcontext=createContext()
// import Color from './color/Color'
// import Black from './color/Black'
// import Red from './color/Red'
// export const colorchangecontext=createContext()

// const App = () => {
//   // const [count,setcount]=useState(0)
//   const [color,setcolor]=useState("white")
//   return (
//     <div>
//       {/* <counterappcontext.Provider value={{count,setcount}}>
//         <h1>hello</h1>
//         <Counter/>
//         <Inc/>
//         <Dec/>
//       </counterappcontext.Provider> */}

//       <colorchangecontext.Provider value={{color,setcolor}}>
//       <Color/>
//       <Black/>
//       <Red/>
//       </colorchangecontext.Provider>
      
//     </div>
//   )
// }

// export default App



import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import Recipe from './recipes/recipe'
export const receipeexample=createContext()
const App = () => {
  const [data,setdata]=useState([])
  useEffect(()=>{
    fetch("https://dummyjson.com/recipes").then(res=>res.json()).
    then(res=>{
      console.log(res)
      setdata(res.recipes)
    })


  },[])
  return (
    <div>
      <receipeexample.Provider value={{data}}>
      <Recipe/>
      </receipeexample.Provider>
      
    </div>
  )
}

export default App
