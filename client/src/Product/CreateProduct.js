import React, { useState } from "react";
import { isSigned } from "../auth/index";
import { Redirect } from 'react-router-dom'
import { createProduct } from "./productApi";

const CreateProduct = () => {
 
  const {data: {_id}} = isSigned();
  const {token} = isSigned();

  const [values, setValues] = useState({
    name: "",
    category: "",
    subcategory: "",
    description:"",
    price: "",
    quantity: "",
    pickupLocation: "",
    origin: "",
    sellerID: _id,
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
    error,
    success,
  } = values;

  const handleChanege = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickAddProduct = async (event) => {
    event.preventDefault();
    
    const data = await createProduct(token, {
      name: name,
      category: category,
      subcategory: subcategory,
      description: description,
      price: price,
      quantity: quantity,
      pickupLocation: pickupLocation,
      origin: origin,
      sellerID: _id
    });
    console.log(data)
      if (data.status !== "success") {
        setValues({ ...values, error: data.message, success: false });
      } else {
        setValues({
          ...values,
          name: "",
          category: "",
          subcategory: "",
          description: "",
          price: "",
          quantity: "",
          pickupLocation: "",
          origin: "",
          error: "",
          success: true,
        });
    }
  };
  const rediderectUser = (succes) => {
    if(succes){
      return <Redirect to='/myProducts' />
    }
  }

  const CreateProductForm = () => (
    <section className="position-relative pt-12 pt-md-14 mt-n11">
      <div className="container mt-5  pt-2 mb-5">
        <div className="row align-items-center text-sm-left text-md-left">
          <div className="col-12 card pt-2 pb-2 card-container">
            <form className="form-signin">
             
                
            <div className="m-1">
                  <label className=" pl-sm-1 pt-1">Product Name</label>
                  <input
                    onChange={handleChanege("name")}
                    type="text"
                    id="inputname"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    required
                    autoFocus
                  />
                </div>
           
            <div className="m-1">
                  <label className="text-gray-800 large pl-sm-1 pt-1">
                    Category
                  </label>
                  <input
                    onChange={handleChanege("category")}
                    type="text"
                    id="inputcategory"
                    className="form-control"
                    placeholder="Category"
                    value={category}
                    required
                  ></input>
                </div>
                 
            <div className="m-1">
                  <label className="text-gray-800 large pl-sm-1 pt-1">
                    Subcategory
                  </label>
                  <input
                    onChange={handleChanege("subcategory")}
                    type="text"
                    id="inputsubcategory"
                    className="form-control"
                    placeholder="Subcategory"
                    value={subcategory}
                    required
                     
                  />
                </div>
            
            <div className="m-1">
              <label className="text-gray-800 large pl-sm-1 pt-1">
                Product Description
              </label>
              <textarea
                onChange={handleChanege("description")}
                className="form-control"
                placeholder="Product description"
                value={description}
                rows="4"
                required
               ></textarea>
            </div>
                        
            <div className="m-1">
              <label className="text-gray-800 large pl-sm-1 pt-1">
                Product Price
              </label>
              <input
                onChange={handleChanege("price")}
                type="number"
                className="form-control"
                value={price}
                required  
              />
            </div>

            <div className="m-1">
              <label className="text-gray-800 large pl-sm-1 pt-1">
                Quantity
              </label>
              <input
                onChange={handleChanege("quantity")}
                type="number"
                className="form-control"
                value={quantity}
                required  
              />
            </div>
                         
            <div className="m-1">
              <label className="text-gray-800 large pl-sm-1 pt-1">
                Pickup Location
              </label>
              <input
                onChange={handleChanege("pickupLocation")}
                type="text"
                className="form-control"
                placeholder="Pickup location"
                value={pickupLocation}
                required
              />
            </div>
             
            <div className="m-1">
              <label className="text-gray-800 large pl-sm-1 pt-1">
                Origin
              </label>
              <input
                onChange={handleChanege("origin")}
                type="text"
                className="form-control"
                placeholder="Origin"
                value={origin}
                required
              />
            </div>

            <div className="pt-4 pb-2 mt-sm-1  mt-xs-1">
              <button
                onClick={clickAddProduct}
                className="btn btn-lg btn-block yellow-bg"
                type="submit"
              >
                Add Product
              </button>
            </div>

            </form>
          </div>
          
        </div>
      </div>
    </section>
  );

  const showError = () => (
    <div
      className="alert alert-danger text-center"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSucces = () => (
    <div
      className="alert alert-info text-center"
      style={{ display: success ? "" : "none" }}
    >
      
      Product Created!
    </div>
  );

  return (
    <div>
      {showError()}
      {rediderectUser(success)}
      {CreateProductForm()}
    </div>
  );
};

export default CreateProduct;
