import "./Pricing.css";
import React, { useState } from 'react';
import cal from '../img/cal.png';
import gaming from '../img/gaming.png';
import list from '../img/list.png';
import voice from '../img/voice.png';
import Card from "react-bootstrap/esm/Card";
import map from '../img/map.png'

function Pricing(props) {
    const [state, setState] = useState({
        counter: 0,
    })

    return(
        <div>
      <Card.Img src= {map} alt="Card image" style={{backgroundColor: 'white'}} height='100%' width='100%'/>
      <Card.ImgOverlay>
        <section id="pricing">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-01">
            </div>
          </div>
        </div> 
        </div> 

        <div className="container py-5">
      
      
      
      
          <div className="row text-center align-items-end">
  
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="bg-white p-5 rounded-lg shadow">
                <h1 className="h6 text-uppercase font-weight-bold mb-4">Free</h1>
                <h2 className="h1 font-weight-bold">$0.00<span className="text-small font-weight-normal ml-2">/ month</span></h2>
      
                <div className="custom-separator my-4 mx-auto bg-primary"></div>
      
                <ul className="list-unstyled my-5 text-small text-left">

                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i>Chat Groups</li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i>Planning Boards</li>
                  <li className="mb-3 text-muted">
                    <i className="fa fa-times mr-2"></i>
                    <del>Interactive Calendar</del>
                  </li>
                  <li className="mb-3 text-muted">
                    <i className="fa fa-times mr-2"></i>
                    <del>Discovery Mode</del>
                  </li>
                  <li className="mb-3 text-muted">
                    <i className="fa fa-times mr-2"></i>
                    <del> Productivity Analytics</del>
                  </li>
                </ul>
                <a href="#" className="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a>
              </div>
            </div>

            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="bg-white p-5 rounded-lg shadow">
                <h1 className="h6 text-uppercase font-weight-bold mb-4">Basic</h1>
                <h2 className="h1 font-weight-bold">$4.99<span className="text-small font-weight-normal ml-2">/ month</span></h2>
      
                <div className="custom-separator my-4 mx-auto bg-primary"></div>
      
                <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> Chat Groups</li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> Planning Boards</li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i>Interactive Calendar</li>

                    <li className="mb-3 text-muted">
                    <i className="fa fa-times mr-2"></i>
                    <del>Discovery Mode</del>
                  </li>
                  <li className="mb-3 text-muted">
                    <i className="fa fa-times mr-2"></i>
                    <del> Productivity Analytics</del>
                  </li>
                </ul>
                <a href="#" className="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="bg-white p-5 rounded-lg shadow">
                <h1 className="h6 text-uppercase font-weight-bold mb-4">Professional</h1>
                <h2 className="h1 font-weight-bold">$9.99<span className="text-small font-weight-normal ml-2">/ month</span></h2>
      
                <div className="custom-separator my-4 mx-auto bg-primary"></div>
      
                <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> Chat Groups</li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> Planning Boards</li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> Interactive Calendar</li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> Discovery Mode</li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> Productivity Analytics</li>
                </ul>
                <a href="#" className="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a>
              </div>
            </div>
     
      
          </div>
        </div>
        <div style={{paddingTop:"15vh"}}></div>
      </section>
      </Card.ImgOverlay>
      </div>
        )
    }
    
    
    export default Pricing;