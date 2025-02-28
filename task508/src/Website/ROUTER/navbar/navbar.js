import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar,Button,Badge} from 'react-bootstrap';
import { IoCartOutline } from "react-icons/io5";

const Navbarr = () => {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="navLinks">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Products</Nav.Link>
                        <Button variant="primary">Login</Button>
                        <Button variant="primary">SignUp</Button>
                        <Button> <IoCartOutline style={{ color: "white", fontSize: 50 }} size={"30"} />
                        <Badge bg="secondary" style={{ top: -10 }}>9</Badge></Button>

                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
}
export default Navbarr;