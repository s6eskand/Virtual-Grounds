import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

import Card from 'react-bootstrap/Card';
import map from '../img/map.png';


export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return username.length > 0 && password.length > 0;
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

     


        <Form.Group size="lg" controlId="username" className="text-left">
          
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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