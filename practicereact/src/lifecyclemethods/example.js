import React from "react";
class Example extends React.Component{
    constructor(){
        super()
        this.state={message:"hello"}

    }

    componentDidMount() {
        console.log("Component Mounted!");
      }
    
      componentDidUpdate() {
        console.log("Component Updated!");
      }
    
      componentWillUnmount() {
        console.log("Component Will Unmount!");
      }
    
      updateMessage = () => {
        this.setState({ message: "Updated message!" });
      };
    render(){
        return(
            <div>
            {this.setState.message}
            <button onClick={this.updateMessage}>update here</button>
            </div>
        )
    }
}
export default Example;