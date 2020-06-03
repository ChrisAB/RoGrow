import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {getAllProducts, getSearchProducts} from './productApi'
import { isSigned } from "../auth/index";
import  GeneralProductCard  from "./GeneralProductCard";


function ProductPage() {

    const [products, setProducts] = useState([]);
    const [productsBySearch, setProductsBySearch] = useState([]);
    const [expandedSearch, setExpandedSearch] = useState(false)
    const [error, setError] = useState(false);
    const {token} = isSigned();

    const loadProducts = async() =>{
        const data = await getAllProducts(token)
        if (data){
          if (data.status !== "success") {
            setError(data.message);
          } else {
              setProducts(data.data);
            }
          }
      }
      
    useEffect(() => {
      loadProducts()
    }, [])

    const [values, setValues] = useState({
      name: undefined,    
      price: undefined,
      quantity: undefined,
      pickupLocation: undefined,
      origin: undefined,
      sellerID: undefined,
      errorVal:""
    });

  const {
      name,
      price,
      quantity,
      pickupLocation,
      origin,
      sellerID,
      errorVal
  } = values;

  const handleChanege = (name) => (event) => {
    setValues({ ...values, errorVal: false, [name]: event.target.value });
    setExpandedSearch(false);
  };

  const clickSearch = async(e) => {
    e.preventDefault();
    setExpandedSearch(true);
    const data = await getSearchProducts(token,{
      name: name,
      price: price,
      quantity: quantity,
      pickupLocation: pickupLocation,
      origin:origin,
    })
    if (data){
          if (data.status !== "success") {
            setError(data.message);
          } else {
            setProducts(data.data);
        }
      }
  }
  
  const expandedValue = () =>{
    if (expandedSearch)
    return "collapse"
    else  return "toggle"

  }

    const searchForm = () => {
      return (
                    <div>
                      <a className="btn btn-lg btn-block blue-bg white-link" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded={expandedSearch} aria-controls="collapseExample">
                                Search
                      </a>
                      <div className={`card p-4 ${expandedValue()}`} id="collapseExample">
                          <div  >
                              <label className="font-weight-bold text-gray-800 pr-1 pl-sm-1 pt-1"> Name: </label>
                              <input
                              onChange={handleChanege("name")}
                              type="text"
                              className="form-control"
                              placeholder="Name"
                              value={name}                              
                              autoFocus
                              />
                          </div>
                          <div >
                              <label className="font-weight-bold text-gray-800 pr-1 pl-sm-1 pt-1">Price: </label>
                              <input
                              onChange={handleChanege("price")}
                              type="number"
                              className="form-control"
                              placeholder="Price"
                              value={price}                            
                             />
                          </div>
                          <div >
                              <label className="font-weight-bold text-gray-800 pr-1 pl-sm-1 pt-1">Available quantity: </label>
                              <input
                              onChange={handleChanege("quantity")}
                              type="number"
                              className="form-control"
                              placeholder="Quantity"
                              value={quantity}                              
                              />
                          </div>
                          <div >
                              <label className="font-weight-bold text-gray-800 pr-1 pl-sm-1 pt-1">Origin: </label>
                              <input
                              onChange={handleChanege("origin")}
                              type="text"
                              className="form-control"
                              placeholder="Origin"
                              value={origin}                              
                              />
                          </div>
                          <div >
                              <label className="font-weight-bold text-gray-800 pr-1 pl-sm-1 pt-1">Pick up location: </label>
                              <input
                              onChange={handleChanege("pickupLocation")}
                              type="text"
                              className="form-control"
                              placeholder="Pick up location"
                              value={pickupLocation}                              
                              />
                          </div>
                          <div className="pt-4 pb-2 mt-sm-1  mt-xs-1">
                              <button
                                onClick={clickSearch}
                                className="btn btn-lg btn-block sign-bg"                                
                              >
                                Apply search
                              </button>
                          </div>
                          </div>      
        </div>
      )
    }

    

    return (
        <section className="position-relative pt-12 pt-md-14 mt-n11">
            
            <div className="mb-5 pb-5 ml-5 mr-5 justify-content-center">
                <div className="col-12 mt-5 pt-2">
                    {searchForm()}
                </div>
                <div className="col-12 row pt-5">
                      {products.map((product, i) => (
                          <GeneralProductCard 
                            key={i} 
                            product={product}/>
                      ))}
                </div>
            </div>
      </section>
    );
  }


export default ProductPage;