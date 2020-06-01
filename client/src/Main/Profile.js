import React,  {useState} from 'react';
import {readUser} from '../auth/index'

const ProfilePage = () => {

    const [values, setValues] = useState({
        firstName:'',
        lastName:'',
        password:'',
        email:'',
        country:'',
        region:'',
        address:'',
        CUI: '',
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

    const init = () => {
        
    }
    

    const UserInfo = () => (
        <div>
            <section className="position-relative pt-12 pt-md-14 mt-n11">
              <div className="container">
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
        </div>
    )

    return (
        <div>
            {UserInfo()}
        </div>
    )
}

export default ProfilePage;

