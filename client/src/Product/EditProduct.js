import React,  {useState, useEffect} from 'react';
import {withRouter, Redirect} from 'react-router-dom'
import { isSigned } from "../auth/index";
import { updateProduct, readProduct} from './productApi'

const EditProduct = ({match}) => {

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
    
    const {token} =  isSigned();

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
    
    

    const handleChanege = (name) => (event) => {
        setValues({ ...values, error: false, [name]: event.target.value });
      };


    const clickUpdate = e => {
        e.preventDefault();
        updateProduct(match.params.productId, token, 
        {   name,
            category,
            subcategory,
            description,
            price,
            quantity,
            pickupLocation,
            origin,
            sellerID}
          ).then(data => {
            //console.log(result);
            if(data.status !== "success"){
              console.log(data.message);
              setValues({ ...values, error: data.message, success: false });
            } else {
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
                    error: "",
                    success: true
               })
              
            }
          })
    }
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
                    onClick={clickUpdate}
                    className="btn btn-lg btn-block yellow-bg"
                    type="submit"
                  >
                    Update
                  </button>
                </div>
    
                </form>
              </div>
              
            </div>
          </div>
        </section>
      );

      const showError = () => (
        <div className="alert alert-danger text-centre" style={{display: error ? '' : 'none'}} >
          {error}
        </div>
      )

    return (
        <div>
            {showError()}
            {CreateProductForm()}
            {rediderectUser(success)}
        </div>
    )
  };
    

export default withRouter(EditProduct);

