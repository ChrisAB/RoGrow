const express = require('express');
const router = express.Router(); 
const mongoose = require('mongoose');

const User = require('../models/user');

router.put('/', (req, res, next) => {

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Password: req.body.Password,
        Salt: req.body.Salt,
        Email: req.body.Email,
        Location: req.body.Location,
        SellerOrClientFlag: req.body.SellerOrClientFlag
    });

    user
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'User created successfully!',
                createdUser: User
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: err});
        });
});

//

router.get('/:userId', (req, res, next) => {
    const id = req.params.userId;
    
    User.findById(id)
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
    User.find()
        .exec()
        .then(docs => {
           const response = {
              users: docs.map(doc => {
                  return {
                    FirstName: doc.FirstName,
                    LastName: doc.LastName,
                    Email: doc.Email,

                    request: {
                            type: 'GET',
                            url: 'http://localhost:27017/users/' + doc._id
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

router.delete('/:userId', (req, res, next) => {
    const id = req.params.userId;
    User.remove({ _id: id})
        .exec()
        .then(result => {
            res.status(201).json({
                message: 'User deleted successfully!',
                createdUser: User
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: err});
        });
});

router.patch('/:userId', (req, res, next) => {
    const id = req.params.userId;

    const updateOps ={};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }

    User.update({ _id: id}, { $set: updateOps })
        .exec()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'User updated successfully!',
                createdUser: User
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: err});
        });;
});

module.exports = router;