import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// for /id
import Signup from './Signin/Signup'
import Signin from './Signin/Signin'
import Home from './Main/Home'
import Menu from './Main/Menu'
import BuyerRegister from './Signin/BuyerRegister'
import SellerRegister from './Signin/SellerRegister'
import ProfilePage from './UserPages/Profile'
import MainPage from './Main/MainPage'
import PrivateRoute from './auth/PrivateRoute'
import PublicRoute from './auth/PublicRoute'
import EditProfile from './UserPages/EditProfile'
import SelelrRoute from './auth/SellerRoute'
import MyProducts from './Product/MyProducts'
import CreateProduct from './Product/CreateProduct'
import ProductPage from './Product/ProductPage'

const Routes = () => {
    return (
        <BrowserRouter>
        <Menu/>
            <Switch>
                <Route path="/about" exact component={Home} />
                <Route path="/" exact component={MainPage} />
                <Route path="/signin" exact component={Signin} />
                <PrivateRoute path="/products" exact component={ProductPage} />
                <PublicRoute path="/register" exact component={Signup} />
                <PublicRoute path="/buyerRegister" exact component={BuyerRegister} />
                <PublicRoute path="/sellerRegister" exact component={SellerRegister} />
                <PrivateRoute path="/profile" exact component={ProfilePage}/>
                <PrivateRoute path="/editProfile" exact component={EditProfile}/>
                <SelelrRoute path="/myProducts" exact component={MyProducts}/>
                <SelelrRoute path="/createProduct" exact component={CreateProduct}/>
                <SelelrRoute path="/editProduct/:productId" exact component={CreateProduct}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;