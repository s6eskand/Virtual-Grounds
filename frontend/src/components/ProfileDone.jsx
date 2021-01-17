
import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from "react-bootstrap/Form";
import map from '../img/map.png';
import ProfileEdit from './ProfileEdit';

import { Link, useHistory } from 'react-router-dom';

// redux
import withShipment from '../withShipment';
import {
  userProfileSelector
} from '../redux/selectors/userProfile';
import {
  ownerSelector
} from '../redux/selectors/auth';
import {
  getUserProfile
} from '../redux/actions/userProfile'

function ProfileDone(props) {
    const history = useHistory();

    useEffect(() => {
      props.getUserProfile()
    }, [])

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
            <h3>Profile</h3>
           
          </div>

          
        </div>
      <div class="panel panel-default">
        <div class="panel-heading">
        <h4 class="panel-title">User Information</h4>
        </div>
        <div class="panel-body">
          <p></p>
          <div class="form-group">
          <p>School</p>
          <p>{props.userProfile.school}</p>
          </div>
          <div class="form-group">
          <p>Term</p>
          <p>{props.userProfile.term}</p>
          </div>
          <div class="form-group">
          <p>Term Type</p>
          <p>{props.userProfile.term_type}</p>
          </div>
          <div class="form-group">
          <p>Company</p>
          <p>{props.userProfile.company}</p>
          </div>
          <div class="form-group">
          <p>Job Search Status</p>
          <p>{props.userProfile.job_search_status ? "Looking" : "Not looking"}</p>
          </div>
          <div class="form-group">
          <p>Bio</p>
          <p>{props.userProfile.biography}</p>
          </div>
          <div class="form-group">
          <p>Interests</p>
          <p>{props.interests}</p>
          </div>

        </div>
      </div>

    </form>
    <button onClick={() => history.push('/edit/profile')} className="btn btn-primary" style={{marginBottom: 20}}>Edit</button>
  </div>
</div>

</div>
</Card.ImgOverlay>
</div>
        )
    }
    
const mapStateToProps = (state) => ({
  owner: ownerSelector(state),
  userProfile: userProfileSelector(state)
})

const actionCreators = {
  getUserProfile
}
    
export default withShipment({
  mapStateToProps,
  actionCreators
}, ProfileDone);