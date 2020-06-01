import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// for /id
import Signup from './Signin/Signup'
import Signin from './Signin/Signin'
import Home from './Main/Home'
import Menu from './Main/Menu'
import BuyerRegister from './Signin/BuyerRegister'
import SellerRegister from './Signin/SellerRegister'
import ProfilePage from './Main/Profile'
import Footerpage from './Main/Footerpage'
import MainPage from './Main/MainPage'
import PrivateRoute from './auth/PrivateRoute'
import PublicRoute from './auth/PublicRoute'


const Routes = () => {
    return (
        <BrowserRouter>
        <Menu/>
            <Switch>
                <Route path="/about" exact component={Home} />
                <Route path="/" exact component={MainPage} />
                <Route path="/signin" exact component={Signin} />
                <PublicRoute path="/register" exact component={Signup} />
                <PublicRoute path="/buyerRegister" exact component={BuyerRegister} />
                <PublicRoute path="/sellerRegister" exact component={SellerRegister} />
                <PrivateRoute path="/profile" exact component={ProfilePage}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;