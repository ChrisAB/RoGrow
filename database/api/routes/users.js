const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/user");

router.put("/", (req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    email: req.body.email,
    county: req.body.county,
    region: req.body.region,
    address: req.body.address,
    role: req.body.role,
    CUI: req.body.CUI,
  });

  user
    .save()
    .then((result) => {
      res.status(201).json({
        status: "success",
        data: user,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ status: "error", error: err });
    });
});

//

router.get("/:userId", (req, res, next) => {
  if (req.query.email) return next();

  const id = req.params.userId;

  User.findById(id)
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json({ status: "success", data: doc });
      } else {
        res.status(404).json({ status: "fail", data: null });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ status: "error", error: err });
    });
});

router.get("/:email", (req, res, next) => {
  const email = req.query.email;

  User.findOne({ email: email })
    .exec()
    .then((doc) => {
      res.status(200).json({ status: "success", data: doc });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ status: "error", error: err });
    });
});

router.get("/", (req, res, next) => {
  User.find()
    .exec()
    .then((docs) => {
      const response = {
        users: docs.map((doc) => {
          return {
            _id: doc._id,
            firstName: doc.firstName,
            lastName: doc.lastName,
            email: doc.email,
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

router.delete("/:userId", (req, res, next) => {
  const id = req.params.userId;
  User.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(201).json({
        status: "success",
        data: null,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ status: "fail", error: err });
    });
});

router.patch("/:userId", (req, res, next) => {
  const id = req.params.userId;
  console.log(req.body);
  User.findOneAndUpdate({ _id: id }, req.body, { useFindAndModify: false })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "User updated successfully!",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
