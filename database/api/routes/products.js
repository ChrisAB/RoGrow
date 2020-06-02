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
      console.log(result);
      res.status(201).json({
        status: "success",
        data: product,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.get("/", (req, res, next) => {
  if (req.query > 0) return next();

  Product.find()
    .exec()
    .then((docs) => {
      const response = {
        products: docs.map((doc) => {
          return {
            name: doc.name,
            description: doc.description,
            price: doc.price,
          };
        }),
      };

      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.get("/:productId", (req, res, next) => {
  if (req.query.length > 0) return next();
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

router.get("/", (req, res, next) => {
  const updateOps = {};
  for (const ops of req.query) {
    updateOps[ops.propName] = ops.value;
  }

  Product.find({ $set: updateOps })
    .exec()
    .then((result) => {
      res.status(200).json({ status: "success", data: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ status: "error", data: err });
    });
});

router.delete("/:productId", (req, res, next) => {
  const id = req.params.productId;
  Product.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(201).json({
        message: "Product deleted successfully!",
        createdProduct: Product,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch("/:productId", (req, res, next) => {
  const id = req.params.productId;

  Product.findOneAndUpdate({ _id: id }, req.body, {
    useFindAndModify: false,
    returnNewDocument: true,
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
