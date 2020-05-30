import React from 'react';
import Footerpage from '../Main/Footerpage'

function Signup() {
    return (
       
            <div className="solo-wrapper  blue-shape-bg">
                <section className="position-relative pt-12 pt-md-14  mt-n11">
                    <div className="container">
                      <div className="row align-items-center text-center text-md-left">
                        <div className="card p-3 m-4 col-md">
                            <div className="text-center mb-3 mt-3 mt-sm-8">
                                <h4 className="tile-info mb-0">
                                  Register as a buyer
                                </h4>
                            </div>
                            <h5 className="mt-4 mb-4 pl-sm-1 text-center">
                            Do you want to have access to information about where you can buy fresh groceries and get them from the source? 
                            </h5>
                            <h6 className="text-center pl-sm-1 text-muted font-weight-normal  mb-0">
                            If the answer is yes you should register as a user this way you will have acces to all the information about the products that you want not having to worry about them being imported from other counties, this way also supporting the local community.
                            </h6>
                            <div className="mt-4 mb-2">
                                <button className="btn btn-lg btn-block blue-bg" >Sign in</button>
                            </div>
                        </div>
                        <div className="col-md card p-3 m-4 mb-0">
                          <div className="text-center mb-3 mt-3 pb-0 pb-xs-1  mt-sm-8">
                              <h4 className="yellow-text mb-0">
                              Register as a seller
                              </h4>
                          </div>
                          <h5 className="mt-4 mb-4 pl-sm-1 pb-0 pb-xs-2  pb-md-0 text-center">
                            Are you a farmer and produce groceries and sell them at the local market but also want to help people get easily in touch with you? 
                            </h5>
                            <h6 className="text-center pb-0 pb-md-1 pb-sm-3  text-muted font-weight-normal pl-sm-1 mb-0">
                            If the answer is yes you should register as a seller. This way people will have acces to all the information about your products and help them get to you more easily, this way also supporting the local community.
                            </h6>
                            <div className="mt-4 mb-2">
                                <button className="btn btn-lg btn-block yellow-bg" >Sign in</button>
                            </div>
                        </div>
                      </div>

                    </div>
                </section>
            <section className="blue-shape-bg  text-center">
                <img src="../assets/transit.svg"  width="72%" className="img-fluid mw-100 float-centre mb-6 mb-md-0 pl-sm-1 pl-5"/>
            </section>
           
             </div>
            
        
    );
}

export default Signup;