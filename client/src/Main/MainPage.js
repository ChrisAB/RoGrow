import React from 'react';
import {Link} from 'react-router-dom'
import {readUser, isSigned} from '../auth/index'

function MainPage() {
    return (
      <div>
      <section className="position-relative pt-12 pt-md-14 mt-n11">
        <div className="container pt-5 mt-5 mb-5 pb-5 ">
          <div className="row pt-5 pb-5  align-items-center text-center text-md-left">
            <div className="col-12 col-md-6">
              <img src="../assets/shopping.png" alt="shopping illustration" className="img-fluid mw-100 float-right mb-6 mb-md-0 pr-lg-5 "/>
            </div>
            <div className="col-12 col-md-6">
              <div className="text-center  mb-5 mt-sm-8">
                  <h2 className="tile-info mb-0">
                  Romanian suppliers united together
                  </h2>
  
              </div>
              <p className="mt-4 mb-0 pl-sm-1 text-center text-lg-center text-sm-center">
                The web-app is meant to connect small, local suppliers who produce fresh ingredients (vegetables, dairy, meat, fruit etc.) and hand-made work with the end user. 
              </p>
              {!isSigned() &&
              <div className="pt-4 pb-2">
                <button className="btn btn-lg btn-block blue-bg" type="submit">
                  <Link className="nav-link p-0 white-link"  to="/register">Join us</Link>
                </button>
              </div>
              }
            </div>
          </div>
  
        </div>
      
      </section>

    </div>
    );
  }


export default MainPage;