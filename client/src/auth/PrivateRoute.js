import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {isSigned} from './index.js'


const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => isSigned() ? (
        <Component {...props} />
    ) : (
        <Redirect to={{pathname: '/signin', state: {from: props.location}}}/>
    )}>
    </Route>
)

export default PrivateRoute;