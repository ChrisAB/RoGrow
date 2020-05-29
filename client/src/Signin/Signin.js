import React from 'react';

function Signin() {
    return (
        <section className="position-relative pt-12 pt-md-14 mt-n11 pb-4 mb-5">
           <div className="container">
               <div className="row align-items-center text-center text-md-left">
                   <div className="col-12 col-md-6 card card-container pb-2 pt-2 mb-4">
                        <form className="form-signin">
                            <div className="pt-2 pb-2">
                                <label className="text-gray-800 large pl-sm-1 pt-1">Email address</label>
                                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                            </div>
                            <div className="pt-2 pb-2">
                                <label className="text-gray-800 large pl-sm-1 pt-1">Password</label>
                                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required></input>
                            </div>
                            <div className="pt-2 pb-2">
                                <button className="btn btn-lg btn-block sign-bg" type="submit">Sign in</button>
                            </div>
                        </form>
                   </div>
                   <div className="col-12 col-md-6 mt-4">
                     <img src="../assets/signin.svg" alt="shopping illustration" height="100%" className="img-fluid mw-100 float-right mb-6 mb-md-0 pl-sm-1"/>
                   </div>
               </div>
           </div>

       </section>

    );
}

export default Signin;