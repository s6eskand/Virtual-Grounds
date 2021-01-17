import React from 'react';

import { Route } from 'react-router-dom';
import Board from './Board';

import Profile from './Profile';

function Dashboard(props) {
    return(
        <>
            <Route exact path="/" component={Profile} />
            <Route exact path="/boards" component={Board} />
        </>
    )
}

export default Dashboard;