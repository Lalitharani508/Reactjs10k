import React, { useEffect, useState } from "react";
import {Nav,Navbar,Container, Badge, Button} from 'react-bootstrap'
import {Link,useNavigate} from 'react-router-dom'
import { FaCartArrowDown } from "react-icons/fa";
import axios from "axios";

const Navbar1 = () => {
    const [cartitems,setCartItems]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/recipes").then(res=>{
            console.log(res)
            setCartItems(res.data)
        }).catch(err=>{
            console.log(err)
        })

    },[])
    const navi=useNavigate()

    return (
        <div>
            <Navbar bg="dark" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home" style={{color:"white"}}>Navbar</Navbar.Brand>
                    <Nav style={{display:"flex",gap:"20px",color:"white",textDecoration:"none"}}>
                        <Link to="/home">Home</Link>
                        <Link to="/recipie">Recipies</Link>
                       <Button onClick={()=>navi('/CartItems')}>
                       <FaCartArrowDown size={30}/>
                       <Badge>{cartitems.length}</Badge>
                       </Button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default Navbar1;