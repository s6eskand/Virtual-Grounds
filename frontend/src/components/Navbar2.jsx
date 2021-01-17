import React, { useState } from 'react';


import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Navbar2(props) {
    const [state, setState] = useState({
        counter: 0,
    })

    return(
      <Nav className="justify-content-center" activeKey="#home" id="home" >
        <Navbar bg="light" expand="lg" fixed="top" style={{width:"100%"}} >
        <Navbar.Brand href="#home">Virtual Grounds</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-center" style={{marginLeft:"225px"}} >
          <Nav className="justify-content-center" fill='true'style={{width:"800px"}}>
          <Nav.Item>
            <Nav.Link href="#home">Dashboard</Nav.Link>
          </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Nav>
    )
}


export default Navbar2;