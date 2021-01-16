import React, { useState } from 'react';

import Navbar1 from '../components/Navbar1';
import Background from '../components/Background';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

function Landing(){

    return(
        <div>
            <Navbar1/>
            <Background/>
            <Features/>
            <Pricing/>
            <Contact/>
        </div>
    )
}

export default Landing;