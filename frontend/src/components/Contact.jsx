
import React, { useState } from 'react';
import Card from "react-bootstrap/esm/Card";
import map from '../img/map.png'


function Contact(props) {
    const [state, setState] = useState({
        counter: 0,
    })

    return(
      <div>
      <Card.Img src= {map} alt="Card image" style={{backgroundColor: 'white'}} height='100%' width='100%'/>
      <Card.ImgOverlay>
<section id="contact" class="section gray-bg">
<div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title-01" style={{marginTop:"300px"}}>
            </div>
          </div>
        </div> 
        </div> 


        <div class="row">
      <div class="col-md-12 col-lg-4">
        <div class="contact-info">
          <div class="ci-row">
            <i class="theme-bg ti-email"></i>
            <label>For Information</label>
            <span>info@virtualgrounds.com</span>
          </div><div class="ci-row">
            <i class="theme-bg ti-email"></i>
            <label>For Support</label>
            <span>support@virtualgrounds.com</span>
              </div>
              <div class="ci-row">
                <i class="theme-bg ti-mobile"></i>
                <label>Talk with us</label>
                <span>1800 108 5252</span>
              </div>

              <div class="ci-row">
                <i class="theme-bg ti-direction"></i>
                <label>Address</label>
                <span>2021 Waterloo, ON, L8S 4H1.</span>
              </div>
            </div>
      </div>
      <div class="col-md-12 col-lg-8">
        <div class="contact-form">
                <h2>Say Something</h2>
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input name="Phone" placeholder="Name" class="form-control" type="text"></input>
                        <span class="input-focus-effect"></span>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input name="Email" placeholder="Email" class="form-control" type="email"></input>
                        <span class="input-focus-effect"></span>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <input name="Subject" placeholder="Subject" class="form-control" type="text"></input>
                        <span class="input-focus-effect"></span>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <textarea name="comment" placeholder="Describe your project" rows="3" class="form-control"></textarea>
                        <span class="input-focus-effect"></span>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="send">
                        <button class="m-btn m-btn-theme"><i class="fa fa-envelope-o" aria-hidden="true"></i>Send</button>
                      </div>
                      </div>
                    </div>
                </form>
            </div>
      </div>
    </div>
    <div style={{paddingTop:"40vh"}}></div>
 
    </section>
    </Card.ImgOverlay>
    </div>
        )
    }
    
    
    export default Contact;