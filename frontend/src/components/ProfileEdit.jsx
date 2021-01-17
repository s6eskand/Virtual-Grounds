/* global BigInt */
import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from "react-bootstrap/Form";
import map from '../img/map.png';

//redux
import withShipment from '../withShipment';
import {
  postUserProfile
} from '../redux/actions/userProfile';
import {
  ownerSelector
} from '../redux/selectors/auth';

function ProfileEdit(props) {
  const [school, setSchool] = useState("");
  const [term, setTerm] = useState("");
  const [term_type, setTermType] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState(false);
  const [bio, setBio] = useState("");
  const [interests, setInterets] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const interestsArr = [...interests.split(',').map(ele => ele.trim())]
    const profileInfo = {
      school: school,
      term: term,
      term_type: term_type,
      company: company,
      job_search_status: status,
      biography: bio,
      interests: interestsArr,
      owner: props.owner
    }
    console.log(profileInfo)
    props.postUserProfile(profileInfo);
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
            <h3>Edit Profile</h3>
           
          </div>

          
        </div>
      <div class="panel panel-default">
        <div class="panel-heading">
        <h4 class="panel-title">User Information</h4>
        </div>
        <div class="panel-body">
          <div class="form-group">

          <Form>
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
      
            type="term_type"
            value={term_type} onChange={(e) => setTermType(e.target.value)}>
            <option>School</option>
            <option>Co-op</option>
          </Form.Control>
        </Form.Group >
 

        <Form.Group size="lg" controlId="company" className="text-left">
          <Form.Label>Company</Form.Label>
          <Form.Control
     
            type="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </Form.Group >

        <Form.Group size="lg" controlId="status" className="text-left">
          <Form.Label>Searching for Job?</Form.Label>
          <Form.Check
            value={status} onClick={(e) => setStatus(!status)} />
          {/* </Form.Control> */}
        </Form.Group >
        
        <Form.Group size="lg" controlId="bio" className="text-left">
          <Form.Label>Bio</Form.Label>
          <Form.Control
           
            type="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </Form.Group >


        <Form.Group size="lg" controlId="interests" className="text-left">
          <Form.Label>Interests (separated by comma)</Form.Label>
          <Form.Control
            
            type="interests"
            value={interests}
            onChange={(e) => setInterets(e.target.value)}
          />
        </Form.Group >
        <Button onClick={handleSubmit} block size="md" type="save"  style={{width:'180px', marginLeft:"30%"}} variant="outline-dark">
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
</Card.ImgOverlay>
</div>
        )
    }
    

const mapStateToProps = (state) => ({
  owner: ownerSelector(state),
})

const actionCreators = {
  postUserProfile
}
    
export default withShipment({
  mapStateToProps,
  actionCreators,
}, ProfileEdit);