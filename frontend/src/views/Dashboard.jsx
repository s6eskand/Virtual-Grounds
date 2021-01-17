import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Navbar2 from '../components/Navbar2';
import ProfileEdit from '../components/ProfileEdit';
import Board from './Board';

import Profile from './Profile';

function Dashboard(props) {
    return(
        <>  
            <Navbar2 />
            <Switch>
                <Route exact path="/" component={Profile} />
                <Route exact path="/edit/profile" component={ProfileEdit} />
                <Route exact path="/boards" component={Board} />
            </Switch>
        </>
    )
}

export default Dashboard;