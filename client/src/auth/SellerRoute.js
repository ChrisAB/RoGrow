import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {isSigned} from './index.js'


const SellerRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => isSigned() && isSigned().data.role === "seller" ? (
        
        <Component {...props} />
    ) : (
        <Redirect to={{pathname: '/', state: {from: props.location}}}/>
    )}>
    </Route>
)

export default SellerRoute;