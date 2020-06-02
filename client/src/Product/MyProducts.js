import React from 'react';
import {Link} from 'react-router-dom'

function MyProducts() {
    return (
      <section className="position-relative pt-12 pt-md-14 mt-n11">
        <div className="container pt-4 mb-5 pb-5 ">
          <div className="row pb-5 align-items-center text-center text-md-left">
                <button className="btn btn-lg btn-block yellow-bg" type="submit">
                      <Link className="nav-link p-0 black-link"  to="/createProduct">Create new product</Link>
                    </button>
            </div>
        </div>
      </section>
    );
  }


export default MyProducts;