import React,  {useState} from 'react';
import {readUser, isSigned} from '../auth/index'
import {Link} from 'react-router-dom'

const ProfilePage = () => {


    const {data: {firstName,  lastName, email, county, region, address, role}} = isSigned();
    
    var Cui = ""

    const isSeller = () =>{
        if (role == "seller"){
            const {data:  {CUI}} = isSigned();
            Cui = CUI;
            return true;
        }
        return false;
    }
    const isColor = () =>{
        if(role == "seller"){
             return {
                color: '#f3b95b'
             }
        }else {
            return {
                color: '#699ff0'
            }
        }
   };
    
    const UserInfo = () => (
        <div>
            <section className="position-relative pt-12 pt-md-14 mt-n11">
              <div className="container pt-5">
                <div className="row align-items-center text-center text-md-left">
                  <div className="card p-4 col-12 col-md-6">
                    <div className="text-center text-lg-left text-sm-left pl-2 mt-sm-8">
                        <h1 className="card-title tile-info mb-0" style={isColor()}>
                        User profile
                        </h1>
                        <h4 className="card-subtitle text-gray-800 mt-2 text-muted">{role}</h4>
                    </div>
                    <div className="mt-4 card-text mb-0 pl-sm-1 text-center text-lg-left text-sm-left">
                            <div >
                                <label className="font-weight-bold text-gray-800 pr-1 pl-sm-1 pt-1">First Name: </label>
                                <label className="pl-sm-1 pt-1 ">{ firstName}</label>
                            </div>
                            <div >
                                <label className="font-weight-bold text-gray-800 pr-1 pl-sm-1 pt-1">Last Name: </label>
                                <label className="pl-sm-1 pt-1 ">{  lastName}</label>
                            </div>
                            <div >
                                <label className="font-weight-bold text-gray-800 pr-1 pl-sm-1 pt-1">Email: </label>
                                <label className="pl-sm-1 pt-1 ">{email}</label>
                            </div>
                            <div >
                                <label className="font-weight-bold text-gray-800 pr-1 pl-sm-1 pt-1">Country: </label>
                                <label className="pl-sm-1 pt-1 ">{county}</label>
                            </div>
                            <div >
                                <label className="font-weight-bold text-gray-800 pr-1 pl-sm-1 pt-1">Region: </label>
                                <label className="pl-sm-1 pt-1 ">{region}</label>
                            </div>
                            <div >
                                <label className="font-weight-bold text-gray-800 pr-1 pl-sm-1 pt-1">Address: </label>
                                <label className="pl-sm-1 pt-1 ">{address}</label>
                            </div>
                            { isSeller() && 
                                <React.Fragment>
                                     <div>
                                            <label className="font-weight-bold text-gray-800 pr-1 pl-sm-1 pt-1">CUI: </label>
                                            <label className="pl-sm-1 pt-1 ">{Cui}</label>
                                    </div>
                                    <div className="row pt-3">
                                        <div className="pt-2 col-6  pb-2">
                                        <button className="btn btn-lg btn-block yellow-bg text-wrap" >Edit Profile</button>
                                        </div>
                                         <div className="pt-2 col-6  pb-2">
                                            <button className="btn btn-lg btn-block yellow-bg text-wrap" >Delete Profile</button>
                                        </div>
                                    </div>
                                </React.Fragment>

                            }
                             { !isSeller() && 
                                <div className="row pt-3">
                                    <div className="pt-2 col-6  pb-2">
                                        <button className="btn btn-lg btn-block blue-bg text-wrap blue-bg" >
                                            <Link className="nav-link p-0 white-link" to="/editProfile">Edit Profile</Link>
                                        </button>
                                    </div>
                                    <div className="pt-2 col-6  pb-2">
                                        <button className="btn btn-lg btn-block blue-bg text-wrap">
                                            <Link className="nav-link p-0 white-link" to="/">Delete Profile</Link>
                                        </button>
                                    </div>
                                </div>
                            }
                                                                               
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <img src="../assets/profile/user.svg" alt="shopping illustration" width="80%" className="img-fluid mw-100 float-right mb-6 mb-md-0"/>
                  </div>
                </div>

              </div>
            </section>
        </div>
    )

    return (
        <div>
            {UserInfo()}
        </div>
    )
}

export default ProfilePage;

