import React,  {useState, useEffect} from 'react';
import {readUser, isSigned} from '../auth/index'
import {Link} from 'react-router-dom'
import { readProduct} from './productApi'

const ViewProduct = ({match}) => {


    const {token} =  isSigned();

    const [values, setValues] = useState({
        name: "",
        category: "",
        subcategory: "",
        description:"",
        price: "",
        quantity: "",
        pickupLocation: "",
        origin: "",
        sellerID: "",
        error: "",
        success: false,
      });

    const {
        name,
        category,
        subcategory,
        description,
        price,
        quantity,
        pickupLocation,
        origin,
        sellerID,
        error,
        success,
    } = values;
    

    const init =  (productId) => {
        //console.log(productId);
        readProduct(productId, token).then(data => {
            if(data.status !== "success"){
                setValues({ ...values, error: data.message, success: false });
            }
            else {
                console.log(data)
               //console.log(userData);
               setValues({
                    ...values,
                    name: data.data.name,
                    category: data.data.category,
                    subcategory: data.data.subcategory,
                    description: data.data.description,
                    price: data.data.price,
                    quantity: data.data.quantity,
                    pickupLocation: data.data.pickupLocation,
                    origin: data.data.origin,
                    sellerID: data.data.sellerID,
                    success: false
               })
            }
        })
    }
    
    useEffect(()=>{
        init(match.params.productId)
    }, []);
    
 

    var successStatus = false;


    
    const ProductInfo = () => (
        <div>
            <section className="position-relative pt-12 pt-md-14 mt-n11">
              <div className="container pt-5">
                <div className="row align-items-center text-center text-md-left">
                  <div className="card p-4 col-12 col-md-6">
                    <div className="text-center text-lg-left text-sm-left pl-2 mt-sm-8">
                        <h1 className="card-title tile-info mb-0">
                        Product
                        </h1>
                    </div>
                    <div className="mt-4 card-text mb-0 pl-sm-1 text-center text-lg-left text-sm-left">
                            <div >
                                <label className="font-weight-bold text-gray-800 pr-1 pl-sm-1 pt-1"> Name: </label>
                                <label className="pl-sm-1 pt-1 ">{ name}</label>
                            </div>
                            <div >
                                <label className="font-weight-bold text-gray-800 pr-1 pl-sm-1 pt-1">Categoty: </label>
                                <label className="pl-sm-1 pt-1 ">{category }</label>
                            </div>
                            <div >
                                <label className="font-weight-bold text-gray-800 pr-1 pl-sm-1 pt-1">Subcategory: </label>
                                <label className="pl-sm-1 pt-1 ">{subcategory}</label>
                            </div>
                            <div >
                                <label className="font-weight-bold text-gray-800 pr-1 pl-sm-1 pt-1 text-justify">Description: </label>
                                <label className="pl-sm-1 pt-1 ">{description}</label>
                            </div>
                            <div >
                                <label className="font-weight-bold text-gray-800 pr-1 pl-sm-1 pt-1">Price: </label>
                                <label className="pl-sm-1 pt-1 font-weight-bold">{price}</label>
                            </div>
                            <div >
                                <label className="font-weight-bold text-gray-800 pr-1 pl-sm-1 pt-1">Available quantity: </label>
                                <label className="pl-sm-1 pt-1 ">{quantity}</label>
                            </div>
                            <div >
                                <label className="font-weight-bold text-gray-800 pr-1 pl-sm-1 pt-1">Origin: </label>
                                <label className="pl-sm-1 pt-1 ">{origin}</label>
                            </div>
                            <div >
                                <label className="font-weight-bold text-gray-800 pr-1 pl-sm-1 pt-1">Pick up location: </label>
                                <label className="pl-sm-1 pt-1 ">{pickupLocation}</label>
                            </div>
                           
                                                                               
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
            {ProductInfo()}
        </div>
    )
}

export default ViewProduct;

