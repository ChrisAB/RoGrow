const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Product = require("../models/product");

router.put("/", (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    category: req.body.category,
    subcategory: req.body.subcategory,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
    pickupLocation: req.body.pickupLocation,
    origin: req.body.origin,
    sellerID: new mongoose.Types.ObjectId(req.body.sellerID),
  });

  product
    .save()
    .then((result) => {
      res.status(201).json({
        status: "success",
        data: product,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ status: "error", error: err });
    });
});

router.get("/", (req, res, next) => {
  if (req.query != {}) return next();

  Product.find()
    .exec()
    .then((docs) => {
      res.status(200).json({ status: "success", data: docs });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ status: "error", error: err });
    });
});

router.get("/", (req, res, next) => {
  Product.find(req.query)
    .exec()
    .then((result) => {
      res.status(200).json({ status: "success", data: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ status: "error", data: err });
    });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;

  Product.findById(id)
    .exec()
    .then((doc) => {
      res.status(200).json({ status: "success", data: doc });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ stauts: "error", error: err });
    });
});

router.delete("/:productId", (req, res, next) => {
  const id = req.params.productId;
  Product.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(201).json({
        status: "success",
        data: null,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ status: "error", error: err });
    });
});

router.patch("/:productId", (req, res, next) => {
  const id = req.params.productId;

  Product.findOneAndUpdate({ _id: id }, req.body, {
    useFindAndModify: false,
    new: true,
  })
    .exec()
    .then((result) => {
      res.status(201).json({
        status: "success",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ status: "error", error: err });
    });
});

module.exports = router;
