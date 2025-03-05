import React, { useState } from 'react'
import Child1 from './child1'
import Child2 from './child2'
 const ParentComp=()=>{
    const [Count,setCount]=useState(0)
    return(
        <div style={{fontSize:"50px",display:"flex",justifyContent:"center"}}>
            <Child1 SetC={setCount}/>

            {Count}
            <Child2 SetC={setCount}/>
        </div>
    )
 }
 export default ParentComp;