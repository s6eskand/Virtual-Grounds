import React from 'react';


import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom'

function Navbar1(props) {

    return(
      <Nav className="justify-content-center" activeKey="#home" id="home" >
        <Navbar bg="light" expand="lg" fixed="top" style={{width:"100%"}} >
        <Navbar.Brand href="#home">Virtual Grounds</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-center" style={{marginLeft:"250px"}} >
          <Nav className="justify-content-center" fill='true'style={{width:"800px"}}>
          <Nav.Item>
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to="/features">Features</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to="/pricing">Pricing</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to="/contact">Contact Us</Link></Nav.Link>
          </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Nav>
    )
}


export default Navbar1;