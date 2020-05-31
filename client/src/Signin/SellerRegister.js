import React, {useState} from 'react';
import {API} from '../config'

const  SellerRegister = () => 
 {
  const [values, setValues] = useState({
    firstName:'',
    lastName:'',
    password:'',
    confirmPassword:'',
    email:'',
    country:'',
    region:'',
    address:'',
    CUI:'',
    error:'',
    success: false
  });

  const { firstName, lastName,
    password, confirmPassword,
    email,
    country,
    region,
    address,
    CUI,
    error,
    success } = values

  const handleChanege = name => event => {
    setValues({...values, error: false, [name]: event.target.value});
  };

  //CHANGE SELLER API ADDRESS
  const registerSeller = async (user) => {
    console.log(user);
    return await fetch(`${API}/v1/user`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clickRegister = async (event) => {
    event.preventDefault();
    const data = await registerSeller({
      firstName: firstName,
      lastName: lastName,
      password: password,
      confirmPassword: confirmPassword,
      email: email,
      country: country,
      region: region,
      address: address,
      CUI: CUI
    });
    if (data) {
      if (data.status != "succes") {
        setValues({ ...values, error: data.message, success: false });
      } else {
        setValues({
          ...values,
          firstName: "",
          lastName: "",
          password: "",
          confirmPassword: "",
          email: "",
          country: "",
          region: "",
          address: "",
          CUI: "",
          error: "",
          success: true,
        });
      }
    }
  };

  const RegisterForm = () =>  (
      <section className="position-relative pt-12 pt-md-14 mt-n11">
        <div className="container mt-3  pt-2 mb-3">
            <div className="row align-items-center text-sm-left text-md-left">
                <div className="col-12 col-md-6 card pt-2 pb-2 card-container">
                     <form className="form-signin">
                        <div className="row">
                            <div className="col-md-6">
                              <div className="m-1">
                                  <label className=" pl-sm-1 pt-1">First Name</label>
                                  <input type="text"  onChange={handleChanege('firstName')} id="inputFirstName" className="form-control" placeholder="First Name" required autoFocus/>
                              </div>
                              <div className="m-1">
                                  <label className="text-gray-800 large pl-sm-1 pt-1">Password</label>
                                  <input type="password" onChange={handleChanege('password')} id="inputPassword" className="form-control" placeholder="Password" required></input>
                              </div>
                          </div>
                            <div className="col-md-6">
                              <div className="m-1">
                                  <label className="text-gray-800 large pl-sm-1 pt-1">Last Name</label>
                                  <input type="text" onChange={handleChanege('lastName')} id="inputLastName" className="form-control" placeholder="Last Name" required autoFocus/>
                              </div>
                              <div className="m-1">
                                  <label className="text-gray-800 large pl-sm-1 pt-1">Confirm Password</label>
                                  <input type="password" onChange={handleChanege('confirmPassword')} id="inputConfirmPassword" className="form-control" placeholder="Password" required></input>
                              </div>
                          </div>
                        </div>
                        <div>
                          <div className="m-1">
                                    <label className="text-gray-800 large pl-sm-1 pt-1">Email address</label>
                                    <input type="email" onChange={handleChanege('email')} id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
                          </div>
                        </div>
                        <div>
                          <div className="m-1">
                                    <label className="text-gray-800 large pl-sm-1 pt-1">Country</label>
                                    <input type="text" onChange={handleChanege('country')} id="inputCountry" className="form-control" placeholder="Country" required autoFocus/>
                          </div>
                        </div>
                        <div>
                          <div className="m-1">
                                    <label className="text-gray-800 large pl-sm-1 pt-1">Region</label>
                                    <input type="text" onChange={handleChanege('region')} id="inputRegion" className="form-control" placeholder="Region" required autoFocus/>
                          </div>
                        </div>
                        <div>
                          <div className="m-1">
                                    <label className="text-gray-800 large pl-sm-1 pt-1">Address</label>
                                    <input type="text" onChange={handleChanege('address')} id="inputAddress" className="form-control" placeholder="Address" required autoFocus/>
                          </div>
                        </div>
                        <div>
                          <div className="m-1">
                                    <label className="text-gray-800 large pl-sm-1 pt-1">CUI</label>
                                    <input type="text" onChange={handleChanege('CUI')} id="inputCUI" className="form-control" placeholder="CUI" required autoFocus/>
                          </div>
                        </div>
                        <div className="pt-2 pb-2 mt-sm-1  mt-xs-1">
                            <button onClick={clickRegister} className="btn btn-lg btn-block yellow-bg yellow-bg-text" type="submit">Register</button>
                        </div>
                     </form>
                </div>
                <div className="col-12 col-md-6  pl-lg-5 pl-xl-5 pl-md-5">
                  <img src="../assets/seller.svg" alt="shopping illustration" width="100%" className="img-fluid mw-100 float-right mb-md-0 pl-sm-1 pl-5"/>
                </div>
            </div>
        </div>
  </section>
  )

  const showError = () => (
    <div className="alert alert-danger" style={{display: error ? '' : 'none'}} >
      {error}
    </div>
  )

  const showSucces = () => (
    <div className="alert alert-info" style={{display: success ? '' : 'none'}} >
      Account created. Please signin.
     </div>
  )

 return (
  <div>
    {showError()}
    {showSucces()}
    {RegisterForm()}
  </div>
 );
}

export default SellerRegister;