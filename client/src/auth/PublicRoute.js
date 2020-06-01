import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {isSigned} from './index.js'


const PublicRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => isSigned() ? (
        <Redirect to={{pathname: '/', state: {from: props.location}}}/>
    ) : (
        <Component {...props} />
    )}>
    </Route>
)

export default PublicRoute;