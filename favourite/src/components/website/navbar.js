import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import { CiShoppingCart } from "react-icons/ci";
import Badge from 'react-bootstrap/Badge';
import './navbar.css';




function Navbar1(){
    return(
        <div>
            <Navbar bg="primary" className="navbar" expand="md">
                <Navbar.Brand>Lalitha</Navbar.Brand>
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse className="collapse">
                    <Nav style={{gap:20}}>
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Contact</Nav.Link>
                        <Button variant="danger">Login</Button>
                        {/* <Button variant="success">SignUp</Button> */}
                        <Button variant="success">
                        <CiShoppingCart size={20}></CiShoppingCart>
                        <Badge style={{top:-10}}>10</Badge>
                        </Button>

                    </Nav>


                </Navbar.Collapse>

                
            </Navbar>
        </div>
    )

}
export {Navbar1};