import React, { useState } from 'react';

import Navbar2 from '../components/Navbar2';
import Background from '../components/Background';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import ProfileEdit from '../components/ProfileEdit';

function Profile(){

    return(
        <div>
            <Navbar2/>
            <ProfileEdit/>
        </div>
    )
}

export default Profile;