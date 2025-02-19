// import React  from "react";
//  class Child extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>{this.props.person_name}</h1>
//                 <h1>{this.props.person_id}</h1>

//             </div>
//         )
//     }

//  }
//  export {Child}



import React from "react";
import { App1,App3 } from "./childclass";




class Parent extends React.Component{
    constructor(){
        super();
        this.state="lalitha"
    }
    render(){
        return(
            <div>hello
                <p>{this.state}</p>
            </div>
        )
    }
}
export default Parent;




class Example2 extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Nagalakshmi",
            age:45,
            qualification:9,
            married:"yes",
            job:"housewwife"
        }
    }
    render(){
        return(
            <div>
                hello there
                <h1>{this.state.name}</h1>
                <h1>{this.state.job}</h1>
            </div>
        )
    }
}
export {Example2}



class Example3 extends React.Component{
    constructor(){
        super();
        this.state=["prasad","lakshmi","chaitanya","lalitha"];
        console.log(this.state)

        }
        render(){
            return(
                <div>
                    Example-3
                    {this.state.map((x,index)=>{
                        return <div key={index}>{x}</div>
                    })}
    
                </div>
            )
        }
    
    };
    

export {Example3}

//parent
export class Example4 extends React.Component{
    constructor(){
        super();
        this.state={
            name:"LALLI",
            age:23,
            location:"jaipur",
            job:"Tester"
        }
        console.log(this.state)
    }
    render(){
        return(
            <div>example4
                <App1 loc={this.state.location}
                name={this.state.name}/>
                
            </div>
            
        )
    }
}

export class Example5 extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state=[
            {id:1,name:"kalyan",job:"tester"},
            {id:2,name:"ram",job:"automation"},
            {id:3,name:"karthik",job:"deveops engineer"}
        ]
        console.log(this.state)
    }
    render(){
        return(
            <div>
                <h1>parent</h1>
                <App3 emp_details={this.state}/>

            </div>
        )
    }
}