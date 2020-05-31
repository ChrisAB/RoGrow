import React, {useState} from 'react';
import {API} from '../config'


const  BuyerRegister = () => {
  const [values, setValues] = useState({
    firstName:'',
    lastName:'',
    password:'',
    confirmPassword:'',
    email:'',
    country:'',
    region:'',
    address:'',
    error:'',
    success: false
  });

  const { firstName, lastName,
          password, confirmPassword,
          email,
          country,
          region,
          address,
          error,
          success } = values

  const handleChanege = name => event => {
    setValues({...values, error: false, [name]: event.target.value});
  };

  const registerBuyer = (user) => {
      //console.log((firstName + " " + lastName));
      fetch(`${API}/v1/user/register`, {
        method: "POST",
        headers: {
          Accept: 'application/json',
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
      .then(response => {
        return response.json();
      })
      .catch(err => {
        console.log(err);
      })
  };

  const clickRegister = (event) => {
    event.preventDefault();
    registerBuyer({
      firstName: firstName, 
      lastName: lastName,
      password: password, 
      confirmPassword: confirmPassword,
      email: email,
      country: country,
      region: region,
      address: address
    });
  }

  const RegisterForm = () =>
      (
       <section className="position-relative pt-12 pt-md-14 mt-n11">
         <div className="container mt-5  pt-2 mb-5">
             <div className="row align-items-center text-sm-left text-md-left">
                 <div className="col-12 col-md-6 card pt-2 pb-2 card-container">
                      <form className="form-signin">
                         <div className="row">
                        <div className="col-md-6">
                          <div className="m-1">
                              <label className=" pl-sm-1 pt-1">First Name</label>
                              <input onChange={handleChanege('firstName')} type="text" id="inputFirstName" class="form-control" placeholder="First Name" required autofocus/>
                          </div>
                          <div className="m-1">
                              <label className="text-gray-800 large pl-sm-1 pt-1">Password</label>
                              <input onChange={handleChanege('password')} type="password" id="inputPassword" class="form-control" placeholder="Password" required></input>
                          </div>
                      </div>
                        <div className="col-md-6">
                          <div className="m-1">
                              <label className="text-gray-800 large pl-sm-1 pt-1">Last Name</label>
                              <input onChange={handleChanege('lastName')} type="text" id="inputLastName" class="form-control" placeholder="Last Name" required autofocus/>
                          </div>
                          <div className="m-1">
                              <label className="text-gray-800 large pl-sm-1 pt-1">Confirm Password</label>
                              <input onChange={handleChanege('confirmPassword')} type="password" id="inputConfirmPassword" class="form-control" placeholder="Password" required></input>
                          </div>
                      </div>
                    </div>
                         <div>
                           <div className="m-1">
                                     <label className="text-gray-800 large pl-sm-1 pt-1">Email address</label>
                                     <input onChange={handleChanege('email')} type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                           </div>
                         </div>
                         <div>
                           <div className="m-1">
                                     <label className="text-gray-800 large pl-sm-1 pt-1">Country</label>
                                     <input onChange={handleChanege('country')} type="text" id="inputCountry" class="form-control" placeholder="Country" required autofocus/>
                           </div>
                         </div>
                         <div>
                           <div className="m-1">
                                     <label className="text-gray-800 large pl-sm-1 pt-1">Region</label>
                                     <input onChange={handleChanege('region')} type="text" id="inputRegion" class="form-control" placeholder="Region" required autofocus/>
                           </div>
                         </div>
                         <div>
                           <div className="m-1">
                                     <label className="text-gray-800 large pl-sm-1 pt-1">Address</label>
                                     <input onChange={handleChanege('address')} type="text" id="inputAddress" class="form-control" placeholder="Address" required autofocus/>
                           </div>
                         </div>
                         <div className="pt-2 pb-2 mt-sm-1  mt-xs-1">
                             <button onClick={clickRegister} className="btn btn-lg btn-block blue-bg" type="submit">Register</button>
                         </div>
                      </form>
                 </div>
                 <div className="col-12 col-md-6  pl-lg-5 pl-xl-5 pl-md-5">
                   <img src="../assets/buyer.svg" alt="shopping illustration" width="90%" className="img-fluid mw-100 float-right mb-md-0 pl-sm-1 pl-5"/>
                 </div>
             </div>
         </div>
      
       </section>
      );

 return (
   <div>
        {RegisterForm()}
        {JSON.stringify(values)}
   </div>
 );
}

export default BuyerRegister;