import React from 'react';


function SellerRegister() {
 return (
  <section className="position-relative pt-12 pt-md-14 mt-n11">
    <div className="container mt-3  pt-2 mb-3">
        <div className="row align-items-center text-sm-left text-md-left">
            <div className="col-12 col-md-6 card pt-2 pb-2 card-container">
                 <form className="form-signin">
                    <div className="row">
                        <div className="col-md-6">
                          <div className="m-1">
                              <label className=" pl-sm-1 pt-1">First Name</label>
                              <input type="text" id="inputFirstName" class="form-control" placeholder="First Name" required autofocus/>
                          </div>
                          <div className="m-1">
                              <label className="text-gray-800 large pl-sm-1 pt-1">Password</label>
                              <input type="password" id="inputPassword" class="form-control" placeholder="Password" required></input>
                          </div>
                      </div>
                        <div className="col-md-6">
                          <div className="m-1">
                              <label className="text-gray-800 large pl-sm-1 pt-1">Last Name</label>
                              <input type="text" id="inputLastName" class="form-control" placeholder="Last Name" required autofocus/>
                          </div>
                          <div className="m-1">
                              <label className="text-gray-800 large pl-sm-1 pt-1">Confirm Password</label>
                              <input type="password" id="inputConfirmPassword" class="form-control" placeholder="Password" required></input>
                          </div>
                      </div>
                    </div>
                    <div>
                      <div className="m-1">
                                <label className="text-gray-800 large pl-sm-1 pt-1">Email address</label>
                                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                      </div>
                    </div>
                    <div>
                      <div className="m-1">
                                <label className="text-gray-800 large pl-sm-1 pt-1">Country</label>
                                <input type="text" id="inputCountry" class="form-control" placeholder="Country" required autofocus/>
                      </div>
                    </div>
                    <div>
                      <div className="m-1">
                                <label className="text-gray-800 large pl-sm-1 pt-1">Region</label>
                                <input type="text" id="inputRegion" class="form-control" placeholder="Region" required autofocus/>
                      </div>
                    </div>
                    <div>
                      <div className="m-1">
                                <label className="text-gray-800 large pl-sm-1 pt-1">Address</label>
                                <input type="text" id="inputAddress" class="form-control" placeholder="Address" required autofocus/>
                      </div>
                    </div>
                    <div>
                      <div className="m-1">
                                <label className="text-gray-800 large pl-sm-1 pt-1">CUI</label>
                                <input type="text" id="inputAddress" class="form-control" placeholder="CUI" required autofocus/>
                      </div>
                    </div>
                    <div className="pt-2 pb-2 mt-sm-1  mt-xs-1">
                        <button className="btn btn-lg btn-block yellow-bg yellow-bg-text" type="submit">Register</button>
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
}

export default SellerRegister;