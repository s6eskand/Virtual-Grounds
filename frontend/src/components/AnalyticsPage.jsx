
import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from "react-bootstrap/Form";
import map from '../img/map.png';
import ProfileEdit from './ProfileEdit';

// redux
import withShipment from '../withShipment';
import {
  analyticsSelector
} from '../redux/selectors/tasks';

function AnalyticsPage(props) {

    console.log(props.analytics)

    const checkCategory = (category) => {
      return (category !== "total" && category !== "sleep" && category !== "total_completed" && category !== "total_uncompleted" && category !== "available_down_time")
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
                  <h3>Productivity Analytics</h3>
                </div>
              </div>



            <div class="panel panel-default">
              <div class="panel-heading">
                <p class="panel-title">Total Allocated Task Time: {props.analytics ? props.analytics.total : ''} hours</p>
              </div>
            </div>
            
            <div class="panel panel-default">
              <div class="panel-heading">
                <p class="panel-title">Total Time Completing tasks: {props.analytics ? props.analytics.total_completed : ''} hours</p>
              </div>
              <div>
                <ul className="list-inline">
                  {props.analytics ? Object.keys(props.analytics).map(key => {
                    if (checkCategory(key)) {
                      return (
                        <li className="list-inline-item">{key} time: {props.analytics[key]}</li>
                      )
                    }
                  }) : null}
                </ul>
              </div>
              <div className="panel-heading">
                <p>Great Job! You saved an extra {props.analytics ? props.analytics.available_down_time : ""} time for yourself! <br />
                Heres a resource on how to use that new found free time!
                </p>
                <div className="justify-content-center row">
                  <iframe title="youtube-resource" width="560" height="315" src="https://www.youtube.com/embed/n3kNlFMXslo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
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
  analytics: analyticsSelector(state)
})

const actionCreators = {}
    
export default withShipment({
  mapStateToProps,
  actionCreators
}, AnalyticsPage);