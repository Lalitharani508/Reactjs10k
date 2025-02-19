import React from "react";
class Update extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }

    componentDidMount(){
        fetch('https://dummyjson.com/test').then(res=>res.json()).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
        }
    render(){
        return(
            <div>
                hello <br></br>
                <button onClick={}>-</button>
                {this.state.count}
                <button onClick={}>-</button>

            </div>
        )
    }
}
export default Update;