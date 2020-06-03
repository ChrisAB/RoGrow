import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {getUserProducts} from './productApi'
import { isSigned } from "../auth/index";
import  SellerProductCard  from "./SellerProductCard";

function MyProducts() {

  const [products, setProducts] = useState([]);
  const {data: {_id}} = isSigned();
  const {token} = isSigned();
  const [error, setError] = useState(false);

  const loadProducts = async() =>{
    const data = await getUserProducts(token, _id)
    //console.log(data);
      if (data.status !== "success") {
        setError(data.message);
      } else {       
          setProducts(data.data);
          //console.log(products)
          
        }
  }
  
  useEffect(() => {
    loadProducts()
  }, [])

  const  ProductsPage = () => (
      
        <div className="container pt-4  pb-2 ">
          <div className="row pb-5 align-items-center text-center text-md-left">
                <button className="btn btn-lg btn-block yellow-bg" type="submit">
                      <Link className="nav-link p-0 black-link"  to="/createProduct">Create new product</Link>
                    </button>
            </div>
        </div>
   
    );

    return (
    <section className="position-relative pt-12 pt-md-14 mt-n11">
        {ProductsPage()}
        <div className="container mb-5 pb-5 ">
          <div className="row">
              {products.map((product, i) => (
                  <SellerProductCard 
                    key={i} 
                    product={product}
                    />
              ))}
          </div>
        </div>
      </section>
    );
  }


export default MyProducts;