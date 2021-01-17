
import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from "react-bootstrap/Form";
import map from '../img/map.png';
import ProfileEdit from './ProfileEdit';
function AnalyticsPage(props) {

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
            <h3>Productivity Analytics</h3>
          </div>
        </div>



      <div class="panel panel-default">
        <div class="panel-heading">
        <h4 class="panel-title">Analytic Title</h4>
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
    
    
export default AnalyticsPage;