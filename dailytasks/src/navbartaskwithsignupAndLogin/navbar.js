import React from "react";
class Signuplogin extends React.Component {
    constructor() {
        super();
        this.state = {
            loginshow: false,
            signupshow: false
        }
    }
    logintoggle=()=> {
        this.setState({loginshow: !this.state.loginshow, signupshow: false })
    }
    signuptoggle=()=> {
        this.setState({ signupshow: !this.state.signupshow, loginshow: false })
    }

    closePopup = () => {
        this.setState({ loginShow: false, signupShow: false });
    };


    render() {
        return (
            <div style={{ display: "flex", justifyContent: "space-around", padding: "10px", alignItems: "center",border:"1px solid black",borderRadius:"10px",backgroundColor:"black",color:"white"}}
            >
                <div>
                    <p style={{fontSize:"25px"}}>NAVBAR</p>
                </div>
                <div>
                    <button onClick={this.logintoggle} style={btnstyle}>LogIn</button>
                    <button onClick={this.signuptoggle} style={btnstyle}>SignUp</button>

                </div>
                {(this.state.loginshow || this.state.signupshow) && (
                    <div onClick={this.closePopup} style={overlayStyle}>
                        <div onClick={(e) => e.stopPropagation()} style={popupStyle}>
                            {this.state.loginshow && (
                                <>
                                    <h3>Login</h3>
                                    <form>
                                        <p>
                                            <input type="email" placeholder="email here"></input>

                                        </p>
                                        <p>
                                            <input type="password" placeholder="password here"></input>
                                        </p>
                                        <button type="submit" style={formButtonStyle}>Login</button>
                                    </form>
                                </>
                            )}

                            {this.state.signupshow && (
                                <>
                                    <h3>signup</h3>
                                    <form>
                                        <p><input type="text" placeholder="Full Name" required style={inputStyle} /></p>
                                        <p><input type="email" placeholder="Email" required  style={inputStyle}/></p>
                                        <p><input type="password" placeholder="Password" required style={inputStyle}/></p>
                                        <p><input type="password" placeholder="Confirm Password" required  style={inputStyle}/></p>
                                        <button type="submit" style={formButtonStyle}>Signup</button>

                                    </form>
                                </>
                            )}


                        </div>
                    </div>
                )}


            </div>
        )
    }
}

const btnstyle={
    height: "30px",
    marginRight: "10px",
    padding: "5px 15px",
    border: "none",
    backgroundColor: "blue",
    color: "white",
    cursor: "pointer",
    borderRadius: "5px"


}


const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(52, 117, 215, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };


  const popupStyle = {
    backgroundColor: "mint",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px gray",
    width: "320px",
    textAlign: "center",
    position: "relative",
    border:"1px solid black"
  };
  

  const inputStyle = {
    width: "180px",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid red",
    borderRadius: "10px",
  };


const formButtonStyle = {
    width: "50%",
    padding: "10px",
    backgroundColor: "black",
    color: "white",
    // border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };
  
  
  
export { Signuplogin }