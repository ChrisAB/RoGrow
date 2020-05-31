import React, { useState } from 'react';
import {Redirect} from 'react-router-dom'
import {login} from '../auth/index'

const Signin = () => {
    const [values, setValues] = useState({
        email: "",
        password:"",
        error: "",
        loading: false,
        redirectToReferrer: false,
      });
    
      const {
        email,
        password,
        error,
        loading,
        redirectToReferrer
      } = values;
    
    const handleChanege = (name) => (event) => {
      setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSignin = async (event) => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });

        const data = await login({
            email: email,
            password: password
        });
        if (data) {
            if (data.status != "succes") {
              setValues({ ...values, error: data.message, loading: false });
            } else {
              setValues({
                ...values,
                redirectToReferrer: true,
              });
            }
          }
    }
    
    const signinForm = () => (
        <div>
        <section className="position-relative pt-12 pt-md-14 mt-n11 pb-4 mb-5 mt-5">
           <div className="container mt-5 pt-5 mb-5">
               <div className="row align-items-center text-center text-md-left">
                   <div className="col-12 col-md-6 card card-container pb-2 pt-2 mb-4">
                        <form className="form-signin">
                            <div className="pt-2 pb-2">
                                <label className="text-gray-800 large pl-sm-1 pt-1">Email address</label>
                                <input type="email" onChange={handleChanege('email')} id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
                            </div>
                            <div className="pt-2 pb-2">
                                <label className="text-gray-800 large pl-sm-1 pt-1">Password</label>
                                <input type="password" onChange={handleChanege('password')} id="inputPassword" className="form-control" placeholder="Password" required></input>
                            </div>
                            <div className="pt-2 pb-2">
                                <button onClick={clickSignin} className="btn btn-lg btn-block sign-bg" type="submit">Sign in</button>
                            </div>
                        </form>
                   </div>
                   <div className="col-12 col-md-6 mt-4 pl-lg-5 pl-xl-5 pl-md-5">
                     <img src="../assets/signin.svg" alt="shopping illustration" height="100%" className="img-fluid mw-100 float-right mb-6 mb-md-0 pl-sm-1 pl-5"/>
                   </div>
               </div>
           </div>

       </section>
       </div>
    );
    const showError = () => (
        <div className="alert alert-danger" style={{display: error ? '' : 'none'}} >
          {error}
        </div>
      )
  
    const showLoading = () => (
      <div className="alert alert-info" style={{display: loading ? '' : 'none'}} >
       <h2>Loading...</h2>
       </div>
    )
    const redirectUser = () =>{
        if(redirectToReferrer){
            return <Redirect to="/" />
        }
    }
    return (
        <div>
            {showError()}
            {showLoading()}
            {signinForm()}
            {redirectUser()}
        </div>
    );
}

export default Signin;