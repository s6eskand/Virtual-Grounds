import React from 'react';

import Navbar1 from '../components/Navbar1';
import Background from '../components/Background';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

import { Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

function Landing(){

    return(
        <div>
            <Route exact path="/" component={Background} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Signup} />
        </div>
    )
}

export default Landing;