import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import {signout, isSigned} from '../auth'
import { ReactSVG } from 'react-svg'

const isActive = (history, path) =>{
     if(history.location.pathname === path){
          return {
               color: '#699ff0'
          }
     }
};



function Menu({history}) {
  return (
    <div>
        <ul className="navbar navbar-expand-lg pr-6 pl-6 mb-0 font-size-sm navbar-light">
           <a className="navbar-brand" href = '/'>
               <img src="../assets/logo.svg" width='50%'  alt="Rogrow"/>
           </a>

           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
          </button>
           
           <div className="navbar-collapse collapse navigation-tabs" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto pr-3">
                    <li className="nav-item ">
                         <Link className="nav-link pl-5" style={isActive(history,'/about')} to="/about">About</Link>
                    </li>

                    {!isSigned() && 
                    <div>
                         <li className="nav-item ">
                              <Link className="nav-link pl-5" style={isActive(history,'/signin')} to="/signin">Sign in</Link>
                         </li>
                         <li className="nav-item">
                              <Link className="nav-link pl-5" style={isActive(history,'/register')} to="/register">Register</Link>
                         </li>
                    </div>
                    }
                   { isSigned() && 
                         <li className="nav-item">
                              <span className="nav-link pl-5" onClick={()=>signout(() => {
                                   history.push("/");
                              })} >Sign out</span>
                         </li>
                    }
                </ul>
           </div>

        </ul>
    </div>      
    
  );
}

export default withRouter(Menu);
