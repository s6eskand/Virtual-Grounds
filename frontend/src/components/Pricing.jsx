import "./Pricing.css";
import React, { useState } from 'react';
import cal from '../img/cal.png';
import gaming from '../img/gaming.png';
import list from '../img/list.png';
import voice from '../img/voice.png';


function Pricing(props) {
    const [state, setState] = useState({
        counter: 0,
    })

    return(

        
        <section id="pricing">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title-01">
              <h3 class="font-alt">Pricing</h3>
            </div>
          </div>
        </div> 
        </div> 

        <div class="container py-5">
      
      
      
      
          <div class="row text-center align-items-end">
  
            <div class="col-lg-4 mb-5 mb-lg-0">
              <div class="bg-white p-5 rounded-lg shadow">
                <h1 class="h6 text-uppercase font-weight-bold mb-4">Basic</h1>
                <h2 class="h1 font-weight-bold">$199<span class="text-small font-weight-normal ml-2">/ month</span></h2>
      
                <div class="custom-separator my-4 mx-auto bg-primary"></div>
      
                <ul class="list-unstyled my-5 text-small text-left">
                  <li class="mb-3">
                    <i class="fa fa-check mr-2 text-primary"></i> Lorem ipsum dolor sit amet</li>
                  <li class="mb-3">
                    <i class="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                  <li class="mb-3">
                    <i class="fa fa-check mr-2 text-primary"></i> At vero eos et accusamus</li>
                  <li class="mb-3 text-muted">
                    <i class="fa fa-times mr-2"></i>
                    <del>Nam libero tempore</del>
                  </li>
                  <li class="mb-3 text-muted">
                    <i class="fa fa-times mr-2"></i>
                    <del>Sed ut perspiciatis</del>
                  </li>
                  <li class="mb-3 text-muted">
                    <i class="fa fa-times mr-2"></i>
                    <del>Sed ut perspiciatis</del>
                  </li>
                </ul>
                <a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a>
              </div>
            </div>

            <div class="col-lg-4 mb-5 mb-lg-0">
              <div class="bg-white p-5 rounded-lg shadow">
                <h1 class="h6 text-uppercase font-weight-bold mb-4">Pro</h1>
                <h2 class="h1 font-weight-bold">$399<span class="text-small font-weight-normal ml-2">/ month</span></h2>
      
                <div class="custom-separator my-4 mx-auto bg-primary"></div>
      
                <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                  <li class="mb-3">
                    <i class="fa fa-check mr-2 text-primary"></i> Lorem ipsum dolor sit amet</li>
                  <li class="mb-3">
                    <i class="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                  <li class="mb-3">
                    <i class="fa fa-check mr-2 text-primary"></i> At vero eos et accusamus</li>
                  <li class="mb-3">
                    <i class="fa fa-check mr-2 text-primary"></i> Nam libero tempore</li>
                  <li class="mb-3">
                    <i class="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                  <li class="mb-3 text-muted">
                    <i class="fa fa-times mr-2"></i>
                    <del>Sed ut perspiciatis</del>
                  </li>
                </ul>
                <a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="bg-white p-5 rounded-lg shadow">
                <h1 class="h6 text-uppercase font-weight-bold mb-4">Enterprise</h1>
                <h2 class="h1 font-weight-bold">$899<span class="text-small font-weight-normal ml-2">/ month</span></h2>
      
                <div class="custom-separator my-4 mx-auto bg-primary"></div>
      
                <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                  <li class="mb-3">
                    <i class="fa fa-check mr-2 text-primary"></i> Lorem ipsum dolor sit amet</li>
                  <li class="mb-3">
                    <i class="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                  <li class="mb-3">
                    <i class="fa fa-check mr-2 text-primary"></i> At vero eos et accusamus</li>
                  <li class="mb-3">
                    <i class="fa fa-check mr-2 text-primary"></i> Nam libero tempore</li>
                  <li class="mb-3">
                    <i class="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                  <li class="mb-3">
                    <i class="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                </ul>
                <a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a>
              </div>
            </div>
     
      
          </div>
        </div>
        <div style={{paddingTop:"15vh"}}></div>
      </section>
      
        )
    }
    
    
    export default Pricing;