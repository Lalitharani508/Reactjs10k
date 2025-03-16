import React from "react";
import {Navbar,Nav,Button} from "react-bootstrap"
import {useNavigate} from 'react-router-dom'
const Navbarr = () => {
    const navigate=useNavigate()
    return (
        <div>
            <Navbar bg="primary" variant="primary" expand="lg" className="px-3">
                <Navbar.Brand href="/">MyApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Button variant="primary" className="me-2" onClick={()=>navigate("/login")} >Login</Button>
                        <Button variant="success" onClick={()=>navigate("/Signup")}>Signup</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        </div>
    )
}
export default Navbarr;