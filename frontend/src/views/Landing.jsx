<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> e1a0135948dde8d1b7dc0516d5dab0091bf71d37

import Navbar1 from '../components/Navbar1';
import Background from '../components/Background';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

<<<<<<< HEAD
import { Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

=======
>>>>>>> e1a0135948dde8d1b7dc0516d5dab0091bf71d37
function Landing(){

    return(
        <div>
<<<<<<< HEAD
            <Route exact path="/" component={Background} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Signup} />
=======
            <Navbar1/>
            <Background/>
            <Features/>
            <Pricing/>
            <Contact/>
>>>>>>> e1a0135948dde8d1b7dc0516d5dab0091bf71d37
        </div>
    )
}

export default Landing;