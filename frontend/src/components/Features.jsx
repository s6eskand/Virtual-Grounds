import "./Features.css";
import React, { useState } from 'react';
import cal from '../img/cal.png';
import list from '../img/list.png';
import prod from '../img/prod.png';
import job from '../img/job.png';
import disc from '../img/disc.png';


function Features(props) {
    const [state, setState] = useState({
        counter: 0,
    })

    return(
        <div>
        <section id="features" class="section services-section gray-bg" className="text-center">
      
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title-01">
              <h3 class="font-alt">Features</h3>
            </div>
          </div>
        </div> 
        </div> 

        <div class="row">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="feature-box-02">
              <div class="feature-content" style={{paddingTop:"30px"}}>
              <img src={cal} style={{width: '8vw', alignContent:"center", paddingBottom:"50px"}}></img>
                <h4>Interactive Calendars</h4>
                <p>Interactive Calendars lets users plan out their day, week, and month with our SMART search</p>
                
              </div>
            </div> 
          </div> 

          <div class="col-12 col-md-6 col-lg-4">
            <div class="feature-box-02">
              <i class="icon theme-bg ti-image"></i>
              <div class="feature-content">
              <img src={list} style={{width: '8vw', alignContent:"center", paddingBottom:"50px"}}></img>
              <h4>Planning Boards</h4>
                <p>Planning Boards allows users to plan out anything from projects to life goals</p>
                
              </div>
            </div> 
          </div> 

          <div class="col-12 col-md-6 col-lg-4">
            <div class="feature-box-02">
              <i class="icon theme-bg ti-layout"></i>
              <div class="feature-content">
              <img src={prod} style={{width: '8vw', alignContent:"center", paddingBottom:"50px"}}></img>
              <h4>Productivity Analytics</h4>
                <p>Productivity analytics lets users track their productivity and compare with friends</p>
                
              </div>
            </div> 
          </div> 

          <div class="col-12 col-md-6 col-lg-4">
            <div class="feature-box-02">
              <i class="icon theme-bg ti-camera"></i>
              <div class="feature-content">
              <img src={job} style={{width: '8vw', alignContent:"center", paddingBottom:"50px"}}></img>
              <h4>Job Search</h4>
                <p>ob Search is a feature that currates job postings from LinkedIn, Lever and more</p>
                
              </div>
            </div> 
          </div> 

          <div class="col-12 col-md-6 col-lg-4">
            <div class="feature-box-02">
              <i class="icon theme-bg ti-world"></i>
              <div class="feature-content">
              <img src={disc} style={{width: '8vw', alignContent:"center", paddingBottom:"50px"}}></img>
              <h4>Discovery Mode</h4>
                <p>Discovery Mode lets users discover new things to learn based on certain interests </p>
                
              </div>
            </div> 
          </div> 

        </div>
      
    </section>
    </div>

        )
    }
    
    
    export default Features;