
import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from "react-bootstrap/Form";
import map from '../img/map.png';

function ChatBox(props) {
  const [message, setMessage] = useState("");


  function handleSubmit(event) {
    event.preventDefault();
  }
    return(
      <div>
      <Card.Img src= {map} alt="Card image" style={{backgroundColor: 'white'}} height='100%' width='100%'/>
      <Card.ImgOverlay>
<div className="container" style={{paddingLeft:"200px"}}>
<div class="row">
  <div class="col-xs-12 col-sm-9" style={{backgroundColor: 'white', outline:"#7a7a7a solid 7px", marginTop:'100px'}}>
    <form class="form-horizontal" >
        <div class="panel panel-default" >
          <div class="panel-body text-center" style={{marginTop:"30px" , backgroundColor: 'white'}}>
            <h3>Chat</h3>
           
          </div>

          
        </div>
      <div class="panel panel-default">
        <div class="panel-heading">
        <h4 class="panel-title">Megan F.</h4>
        </div>
        <p
        style={{textAlign:'left', 
        marginRight:480,
        borderRadius: '3px',
        padding: 10,
        margin: "0 0 8px 0",
        minHeight: "50px",
        backgroundColor: "#4267B2",
        color: "white"}} 
        
        >Hi my name is Megan</p>
        <p style={{textAlign:'right', 
    marginLeft:520,
    borderRadius: '3px',
    padding: 10,
    margin: "0 0 8px 0",
    minHeight: "50px",
    backgroundColor: "#4267B2",
    color: "white"}} >Hey I'm Brandon</p>
        <div class="panel-body" style={{marginTop:'500px'}}>
          <div class="form-group">

          <Form onSubmit={handleSubmit}>
          

        <Form.Group size="lg" controlId="message" className="text-right">
          <Form.Label></Form.Label>
          <Form.Control
            
            type="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group >
        <Button block size="md" type="save"  style={{ width:'180px', marginLeft:"70%"}} variant="outline-dark">
          Send
        </Button>
        </Form>

          </div>


        </div>
      </div>

    </form>
  </div>
</div>

</div>
</Card.ImgOverlay>
</div>
        )
    }
    
    
export default ChatBox;