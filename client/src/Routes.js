import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// for /id
import Signup from './Signin/Signup'
import Signin from './Signin/Signin'
import Home from './Main/Home'
import Menu from './Main/Menu'
import BuyerRegister from './Signin/BuyerRegister'
import SellerRegister from './Signin/SellerRegister'

import Footerpage from './Main/Footerpage'
import MainPage from './Main/MainPage'
 
const Routes = () => {
    return (
        <BrowserRouter>
        <Menu/>
            <Switch>
                <Route path="/about" exact component={Home} />
                <Route path="/" exact component={MainPage} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/register" exact component={Signup} />
                <Route path="/buyerRegister" exact component={BuyerRegister} />
                <Route path="/sellerRegister" exact component={SellerRegister} />

            </Switch>
        </BrowserRouter>
    )
}
export default Routes;