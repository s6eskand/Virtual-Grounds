import React, { useState } from 'react';


import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Navbar2(props) {
    const [state, setState] = useState({
        counter: 0,
    })

    return(
      <Nav className="justify-content-center" activeKey="#home" id="home">
        <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home">Virtual Grounds</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="justify-content-center" fill='true'>
          <Nav.Item>
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#features">Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#pricing">Calendar</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#contact">Productivity</Nav.Link>
          </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Nav>
    )
}


export default Navbar2;