import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {getAllProducts} from './productApi'
import { isSigned } from "../auth/index";
import  GeneralProductCard  from "./GeneralProductCard";


function ProductPage() {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const {token} = isSigned();

    const loadProducts = async() =>{
        const data = await getAllProducts(token)
          if (data.status !== "success") {
            setError(data.message);
          } else {
              setProducts(data.data);
            }
      }
      
    useEffect(() => {
      loadProducts()
    }, [])

    return (
        <section className="position-relative pt-12 pt-md-14 mt-n11">
            
            <div className="mb-5 pb-5 ml-5 mr-5 justify-content-center">
                <div className="col-12 mt-5 pt-2 card">
                    search options
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