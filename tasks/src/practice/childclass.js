import React from "react";
class App1 extends React.Component{
    render(){
        return(
            <div>
                {this.props.loc}
            </div>
        )
    }
}
export {App1,App2}


class App2 extends React.Component{
    render(){
    const {emp_details} = this.props;

        return(
            <div>
                {emp_details.map((y,index)=>{
                    return(
                       <div>
                         <p key={index}>{y.id}</p>
                         <p>{y.name}</p>
                         <p>{y.job}</p>

                        </div>
                    )
                })}
            </div>
        )
    }
}