import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// for /id
import Signup from './Signin/Signup'
import Signin from './Signin/Signin'
import Home from './Main/Home'
import Menu from './Main/Menu'
import Footerpage from './Main/Footerpage'
 
const Routes = () => {
    return (
        <BrowserRouter>
        <Menu/>
            <Switch>
                <Route path="/about" exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
            </Switch>
        <Footerpage/>
        </BrowserRouter>
    )
}
export default Routes;