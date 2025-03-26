import React from "react";
import { Child } from "./c";
export function Parent(){

    const user1=[{id:1,name:"lalli",age:26},{id:2,name:"k",age:22}]
    return(
        <div>
            hello
            {user1.map((k,index)=>{
                return(
                    < >
                    <Child name={k.name} a={k.age}/>
                    
                    </>
                )
            })}
        </div>
    )
}