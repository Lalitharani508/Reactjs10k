import React from "react";


class Eg1 extends React.Component{
    handleclick=()=>{
        alert("handle clicked")
    }
    render(){
        return(
            <div>event handlings
                <h1>event1</h1>
                <button onClick={this.handleclick}>click me</button>
            </div>
        )
    }
}
export {Eg1}

export class Eg2 extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }

    increment=()=>{
        this.setState({
        count:this.state.count+1

        })
    }
    decrement=()=>{
        this.setState({
        count:this.state.count-1

        })
    }

    render(){
        return(
            <div>
                <h1>event2</h1>
                <button onClick={this.decrement}>-</button>
                {this.state.count}
                <button onClick={this.increment}>+</button>
                
                </div>
        )
    }
}

export class Eg3 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            color:"white"
        }
    }

colorhandler=(colorchange)=>{
    this.setState(()=>{
        return(
            {color:colorchange}
        )
    })
}


    render(){
        return(
            <div>
                <h1>
                    evnet3
                    color change Example
                </h1>
                <div style={{backgroundColor:this.state.color}}>
                    <button onClick={()=>this.colorhandler("yellow")}>yellow</button> <br></br>
                    <button onClick={()=>this.colorhandler("green")}>green</button><br></br>
                    <button onClick={()=>this.colorhandler("blue")}>blue</button>
                </div>
            </div>
        )
    }
}


export class Eg4 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'madhu',
            age:24,
            type:false
        }
    }

    namechange=()=>{
        this.setState((n1)=>{
            return(
                {name:n1.name==="madhu" ? "lalli" : "madhu1",
                 type:!n1.type
                }
            )
        })
    }


    render(){
        return(
            <div>
               
                <h1> event4</h1>
                {this.state.age}
                {this.state.type? this.state.name:this.state.name}
                <button onClick={this.namechange}>click to change the name</button>
            </div>
        )
    }
}