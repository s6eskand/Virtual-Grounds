import React, { useState } from 'react';


import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Navbar1(props) {
    const [state, setState] = useState({
        counter: 0,
    })

    return(
      <Nav className="justify-content-center" activeKey="#home" id="home" >
        <Navbar bg="light" expand="lg" fixed="top" style={{width:"100%"}} >
        <Navbar.Brand href="#home">Virtual Grounds</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-center" style={{marginLeft:"250px"}} >
          <Nav className="justify-content-center" fill='true'style={{width:"800px"}}>
          <Nav.Item>
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Nav>
    )
}


export default Navbar1;