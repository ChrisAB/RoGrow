import React from 'react'
import { Link } from 'react-router-dom'

const GeneralProductCard = ({product}) => {
  
    return (
        <div className="col-4 mb-3">
            <div className="card m-1 mb-4">
                <div className="card-header white-bg  pb-1">
                    <h5 >{product.name}</h5>
                </div>
                <div className="card-body p-3 justify-content-center">
                    <div className="p-1">
                        <p className="text-truncate mr-lg-4">Description: {product.description}</p>
                        <p className="">Price: {product.price}</p>
                    </div>
                    
                    <div className="row pl-2 pr-2">
                        <button className="btn p-1 col btn-lg m-2 blue-bg" >
                            <Link to={`/view/${product._id}`} className="small white-link p-0 nav-link white-link text-truncate" >View product
                            </Link>
                        </button>
                </div>
                </div>
                
                

            </div>
        </div>
    )
};
export default GeneralProductCard;
