const express = require('express');
const router = express.Router(); 
const mongoose = require('mongoose');

const Product = require('../models/product');

router.put('/', (req, res, next) => {

    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        ProductName: req.body.ProductName,
        ProductCategory: req.body.ProductCategory,
        ProductSubcategory: req.body.ProductSubcategory,
        ProductDescription: req.body.ProductDescription,
        ProductPrice: req.body.ProductPrice,
        ProductQuantity: req.body.ProductQuantity,
        PickupLocation: req.body.PickupLocation, 
        ProductOrigin: req.body.ProductOrigin,
        SellerUniqueID: req.body.SellerUniqueID
    });

    product
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Product created successfully!',
                createdProduct: Product
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: err});
        });

    
});

//

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
   
    Product.findById(id)
        .exec()
        .then(doc => {
            console.log('From database', doc);
            if(doc){
                res.status(200).json(doc);
            } else {
                res.status(404).json({message: 'No valid entry found for ID'});
            }

        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: err});
        });
});

router.get('/', (req, res, next) => {
    Product.find()
        .exec()
        .then(docs => {
           const response = {
              products: docs.map(doc => {
                  return {
                    ProductName: doc.ProductName,
                    ProductDescription: doc.ProductDescription,
                    ProductPrice: doc.ProductPrice,

                    request: {
                            type: 'GET',
                            url: 'http://localhost:27017/products/' + doc._id
                      }
                  }
              }) 
           };

           res.status(200).json(response);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: err});
        });
});

router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.remove({ _id: id})
        .exec()
        .then(result => {
            res.status(201).json({
                message: 'Product deleted successfully!',
                createdProduct: Product
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: err});
        });
});

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;

    const updateOps ={};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }

    Product.update({ _id: id}, { $set: updateOps })
        .exec()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Product updated successfully!',
                createdProduct: Product
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: err});
        });;
});

module.exports = router;