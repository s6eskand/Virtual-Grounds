import React from 'react';

import Landing from './Landing';
import Dashboard from './Dashboard';

import { Route } from 'react-router-dom';

// redux
import withShipment from '../withShipment';
import {
    isAuthenticatedSelector
} from '../redux/selectors/auth';

function Base(props) {
    return(
        props.isAuthenticated ? <Dashboard /> : <Landing />
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: isAuthenticatedSelector(state)
})

const actionCreators = {

}

export default withShipment({
    mapStateToProps,
    actionCreators,
}, Base);