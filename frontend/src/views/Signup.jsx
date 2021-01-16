import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

import Card from 'react-bootstrap/Card';
import map from '../img/map.png';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirst] = useState("");
  const [lastname, setLast] = useState("");
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>

    <Card className="bg-dark">
        <Card.Img src= {map} alt="Card image" style={{backgroundColor: 'white'}}/>
        <Card.ImgOverlay>
          
      
          <div className="text-center" >
          <Card.Title  className="maintitle" style={{ fontSize: '10vh', fontWeight:'bold' }}> 
            Virtual Grounds
          </Card.Title>
          <Card.Text style={{ fontSize: '3vh', color: '#6B6C70' }}>The all-in-one virtual space</Card.Text>
          <div className="Login">
      <Form onSubmit={handleSubmit}>

      <Form.Group size="lg" controlId="firstname" className="text-left">
          
          <Form.Label>First Name</Form.Label>
          <Form.Control
            autoFocus
            type="firstname"
            value={firstname}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group >

        <Form.Group size="lg" controlId="lastname" className="text-left">
          
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            autoFocus
            type="emalastnameil"
            value={lastname}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group >



        <Form.Group size="lg" controlId="email" className="text-left">
          
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group >
        <Form.Group size="lg" controlId="password" className="text-left">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Sign Up
        </Button>
      </Form>
    </div>
          </div>
          
        </Card.ImgOverlay>
      </Card>

    </div>
  );
}