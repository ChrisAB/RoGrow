import React from 'react'
import { Link } from 'react-router-dom'
import {deletePoduct} from './productApi'
import { isSigned } from "../auth/index";

const SellerProductCard = ({product}) => {

    const {token} = isSigned();

    const clickDelete = e => {
        console.log("DELETE")
        console.log(token)
        deletePoduct(product._id,token).then(data => {
            if(data.status !== "success"){
                console.log(data.message);
              } else {
                window.location.reload(false);
              }
        })
    }
    

    return (
        <div className="col-6 mb-3">
            <div className="card m-2 mb-4">
                <div className="card-header white-bg pl-lg-5 pb-1">
                    <h5 >{product.name}</h5>
                </div>
                <div className="card-body pl-lg-5 p-2 justify-content-center">
                    <div className="p-1">
                        <p className="text-truncate mr-lg-4">Description: {product.description}</p>
                        <p className="">Price: {product.price}</p>
                    </div>
                    
                    <div className="row p-1">
                        <button className="btn p-1 col-5 btn-lg m-2 yellow-bg" >
                            <Link to={`/editProduct/${product._id}`} className="small white-link p-0 nav-link black-link text-truncate" >Edit product
                            </Link>
                        </button>
                        <button onClick={clickDelete} className="btn p-1 col-5 btn-lg m-2 yellow-bg" >
                            <Link to="/myProducts" className="small white-link p-0 nav-link black-link text-truncate" >Delete product
                            </Link>
                        </button>
                </div>
                </div>
                
                

            </div>
        </div>
    )
};
export default SellerProductCard;
