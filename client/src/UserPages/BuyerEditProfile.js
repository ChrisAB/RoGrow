import React,  {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import { isSigned, readUser } from "../auth/index";

const BuyerEditProfile = (props) => {

    const {data: {_id}} = isSigned();

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        county: "",
        region: "",
        address: "",
        error: "",
        success: false,
      });

    const {
      firstName,
      lastName,
      email,
      county,
      region,
      address,
      error,
      success,
    } = values;
    
    const {token} =  isSigned();

    const init =  () => {
        readUser(_id, token).then(userData => {
            if(userData.status !== "success"){
                setValues({ ...values, error: userData.message, success: false });
            }
            else {
               //console.log(userData);
               setValues({
                    ...values,
                    firstName: userData.data.data.firstName,
                    lastName: userData.data.data.lastName,
                    email: userData.data.data.email ,
                    county: userData.data.data.county,
                    region: userData.data.data.region,
                    address: userData.data.data.address,
                    success: true
               })
            }
        })
       
    }
    
    useEffect(()=>{
        init()
    }, []);
    
    

    const handleChanege = (name) => (event) => {
        setValues({ ...values, error: false, [name]: event.target.value });
      };

    const UserForm = () => (
        <section className="position-relative pt-12 pt-md-14 mt-n11">
            <div className="container mt-5  pt-2 mb-5">
                <div className="row align-items-center text-sm-left text-md-left">
                  <div className="col-12 col-md-6 card pt-2 pb-2 card-container">
                    <form className="form-signin">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="m-1">
                            <label className=" pl-sm-1 pt-1">First Name</label>
                            <input
                              onChange={handleChanege("firstName")}
                              type="text"
                              id="inputFirstName"
                              className="form-control"
                              placeholder="First Name"
                              value={firstName}
                              required
                              autoFocus
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="m-1">
                            <label className="text-gray-800 large pl-sm-1 pt-1">
                              Last Name
                            </label>
                            <input
                              onChange={handleChanege("lastName")}
                              type="text"
                              id="inputLastName"
                              className="form-control"
                              placeholder="Last Name"
                              value={lastName}
                              required

                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="m-1">
                          <label className="text-gray-800 large pl-sm-1 pt-1">
                            Email address
                          </label>
                          <input
                            onChange={handleChanege("email")}
                            type="email"
                            id="inputEmail"
                            className="form-control"
                            placeholder="Email address"
                            value={email}
                            required

                          />
                        </div>
                      </div>
                      <div>
                        <div className="m-1">
                          <label className="text-gray-800 large pl-sm-1 pt-1">
                            Country
                          </label>
                          <input
                            onChange={handleChanege("country")}
                            type="text"
                            id="inputCountry"
                            className="form-control"
                            placeholder="Country"
                            value={county}
                            required

                          />
                        </div>
                      </div>
                      <div>
                        <div className="m-1">
                          <label className="text-gray-800 large pl-sm-1 pt-1">
                            Region
                          </label>
                          <input
                            onChange={handleChanege("region")}
                            type="text"
                            id="inputRegion"
                            className="form-control"
                            placeholder="Region"
                            value={region}
                            required

                          />
                        </div>
                      </div>
                      <div>
                        <div className="m-1">
                          <label className="text-gray-800 large pl-sm-1 pt-1">
                            Address
                          </label>
                          <input
                            onChange={handleChanege("address")}
                            type="text"
                            id="inputAddress"
                            className="form-control"
                            placeholder="Address"
                            value={address}
                            required
                          />
                        </div>
                      </div>
                      <div className="pt-2 pb-2 mt-sm-1  mt-xs-1">
                        <button
                          
                          className="btn btn-lg btn-block blue-bg"
                        
                        >
                         Update Profile
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-12 col-md-6  pl-lg-5 pl-xl-5 pl-md-5">
                    <img
                      src="../assets/register/buyer.svg"
                      alt="shopping illustration"
                      width="90%"
                      className="img-fluid mw-100 float-right mb-md-0 pl-sm-1 pl-5"
                    />
                  </div>
                </div>
            </div>
        </section>
    );

    return (
        <div>
            {UserForm()}
        </div>
    )
  };
    

export default withRouter(BuyerEditProfile);

