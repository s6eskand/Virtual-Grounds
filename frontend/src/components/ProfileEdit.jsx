
import React, { useState } from 'react';
import headshot from '../img/headshot.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from "react-bootstrap/Form";

function ProfileEdit(props) {
  const [school, setSchool] = useState("");
  const [term, setTerm] = useState("");
  const [term_type, setTermType] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");
  const [bio, setBio] = useState("");
  const [interests, setInterets] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }
    return(
        
<div className="container" style={{paddingLeft:"200px"}}>
<div class="row">
  <div class="col-xs-12 col-sm-9">
    <form class="form-horizontal">
        <div class="panel panel-default">
          <div class="panel-body text-center" style={{marginTop:"100px"}}>
           <img src={headshot} class="img-circle profile-avatar" alt="User avatar" width='200px'></img>
           
          </div>

          <Button class="panel-body text-center button-center" style={{width:'180px', marginLeft:"37%", marginTop:"5px"}} variant="outline-dark">Upload New Photo</Button>{' '}
        </div>
      <div class="panel panel-default">
        <div class="panel-heading">
        <h4 class="panel-title">User Information</h4>
        </div>
        <div class="panel-body">
          <div class="form-group">

          <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="school" className="text-left">
          <Form.Label>School</Form.Label>
          <Form.Control
            autoFocus
            type="school"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />
        </Form.Group >


        <Form.Group size="lg" controlId="term" className="text-left">
          <Form.Label>Term</Form.Label>
          <Form.Control 
            as="select" 
            defaultValue="Select"             
            autoFocus
            type="term"
            value={term} onChange={(e) => setTerm(e.target.value)}>
            <option>1A</option>
            <option>1B</option>
            <option>2A</option>
            <option>2B</option>
            <option>3A</option>
            <option>3B</option>
            <option>4A</option>
            <option>4B</option>
          </Form.Control>
        </Form.Group >


        <Form.Group size="lg" controlId="term_type" className="text-left">
          <Form.Label>Term Type</Form.Label>
          <Form.Control 
            as="select" 
            defaultValue="Select"             
            autoFocus
            type="term_type"
            value={term_type} onChange={(e) => setTermType(e.target.value)}>
            <option>School</option>
            <option>Co-op</option>
          </Form.Control>
        </Form.Group >
 

        <Form.Group size="lg" controlId="company" className="text-left">
          <Form.Label>Company</Form.Label>
          <Form.Control
            autoFocus
            type="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </Form.Group >

        <Form.Group size="lg" controlId="status" className="text-left">
          <Form.Label>Job Search Status</Form.Label>
          <Form.Control 
            as="select" 
            defaultValue="Select"             
            autoFocus
            type="status"
            value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>Searching</option>
            <option>Employed</option>
            <option>Found Employment</option>
            <option>Not Searching</option>
          </Form.Control>
        </Form.Group >
        
        <Form.Group size="lg" controlId="bio" className="text-left">
          <Form.Label>Bio</Form.Label>
          <Form.Control
            autoFocus
            type="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </Form.Group >


        <Form.Group size="lg" controlId="interests" className="text-left">
          <Form.Label>Interests (separated by comma)</Form.Label>
          <Form.Control
            autoFocus
            type="interests"
            value={interests}
            onChange={(e) => setInterets(e.target.value)}
          />
        </Form.Group >
        <Button block size="md" type="save"  style={{width:'180px', marginLeft:"39%"}} variant="outline-dark">
          Save
        </Button>
        </Form>

          </div>


        </div>
      </div>

    </form>
  </div>
</div>

</div>

        )
    }
    
    
export default ProfileEdit;