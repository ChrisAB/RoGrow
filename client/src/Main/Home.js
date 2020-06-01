import React from 'react';
import Footerpage from './Footerpage'
import {API} from '../config'

function Home() {
  return (
    <div>
    <section className="position-relative pt-12 pt-md-14 mt-n11">
      <div className="container pt-5">
        <div className="row align-items-center text-center text-md-left">
          <div className="col-12 col-md-6">
            <img src="../assets/shopping.png" alt="shopping illustration" className="img-fluid mw-100 float-right mb-6 mb-md-0"/>
          </div>
          <div className="col-12 col-md-6">
            <div className="text-center text-lg-right text-sm-left mb-5 mt-sm-8">
                <h4 className="tile-info mb-0">
                Romanian suppliers united together
                </h4>
                <h5 className="text-gray-800 large pl-sm-1">
                  Project Description
                </h5>

            </div>
            <p className="mt-4 mb-0 pl-sm-1 text-center text-lg-right text-sm-left">
              The web-app is meant to connect small, local suppliers who produce fresh ingredients (vegetables, dairy, meat, fruit etc.) and hand-made work with the end user. This comes as an alternative to keep selling products commonly found in local delhi markets in times affected by the current coronavirus.
            </p>
          </div>
        </div>

      </div>
    </section>
    <section className="position-relative pt-12 pt-md-14 mt-n11 blue-shape-bg pb-4">
      <div className="container">
        <div className="row align-items-center text-center text-md-right mt-5">
          <div className="col-12 col-md-6 ">
            <div className="text-center text-lg-left text-sm-left mb-5 mt-sm-8 pt-sm-4 pt-4">
                <h5 className="text-gray-800 large pl-sm-1">
                  Project Details
                </h5> 

            </div>
            <p className="mt-4 mb-0 pl-sm-1 text-center text-lg-left text-sm-left ">
            The client will be able to contact the supplier and set up a convenient exchange. (Whether it be delivery, pickup or a different pick-up).

            The web-app also serves as an initiative to boost local producers, thus benefiting the economy of the country during these troubled times.

            Functionality can be extended to include big distribution chains which can create bids on different products, thus making sure they have a constant supply of local goods.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img src="../assets/home/people-shopping.png" alt="shopping illustration" className="img-fluid mw-100 float-right mb-6 mb-md-0 pl-sm-1"/>
          </div>

        </div>
       
    </div>
    
    </section>
    <section className="py-8 py-md-10">
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-12 col-md-4 text-center">
            <div className="icon mb-3">
              <img src="../assets/home/database.svg" width="50"/>  
            </div>
            <h4 className="text-gray-800">
            Database
            </h4>
            <p className="text-muted mb-6 mb-md-0 p-3">                
                Provides a RESTful API to connect Backend to database. Takes JSON requests from backend and stores/retrieves them to/from database       
            </p>
          </div>
          <div className="col-12 col-md-4 text-center">
            <div className="icon mb-3">
              <img src="../assets/home/frontend.svg" width="50"/>  
            </div>
            <h4 className="text-gray-800">
            Frontend
            </h4>
            <p className="text-muted mb-6 mb-md-0 p-3"> 
              Sends and Receives data from backend. Used for displaying information and collecting data.    
            </p>
          </div>
          <div className="col-12 col-md-4 text-center">
            <div className="icon mb-3">
              <img src="../assets/home/backend.svg" width="50"/>  
            </div>
            <h5 className="text-gray-800">
              Backend
            </h5>
            <p className="text-muted mb-6 mb-md-0 p-3">                
              Connect database and frontend. Does all the computing, data validation, authentication etc.          
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footerpage/>
  </div>
  );
}

export default Home;
