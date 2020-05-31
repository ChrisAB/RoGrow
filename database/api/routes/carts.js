const express = require('express');
const router = express.Router(); 
const mongoose = require('mongoose');

const Cart = require('../models/cart');

router.put('/', (req, res, next) => {

    const cart = new Cart({
        _id: new mongoose.Types.ObjectId(),
        Products: req.body.Products,
        ClientUniqueID: res.body.ClientUniqueID
    });
    cart.save().then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));

    res.status(201).json({
        message: 'Cart created! :)',
        createdCart: cart
    });
});

//

router.get('/:cartId', (req, res, next) => {
    const id = req.params.cartId;
    if (id === 'test'){
        res.status(200).json({
            message: 'You discovered the test ID',
            cartId: id
        });
    } else {
        res.status(200).json({
            message: 'Handling GET requests to /carts'
        });  
    }
});

router.delete('/:cartId', (req, res, next) => {
    const id = req.params.cartId;
    res.status(200).json({
        message: 'Deleted cart ;-;',
        cartId: id
    });
});

router.patch('/:cartId', (req, res, next) => {
    const id = req.params.cartId;
    res.status(200).json({
        message: 'Updated cart! :D',
        cartId: id
    });
});

module.exports = router;