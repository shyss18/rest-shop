const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Product = require("../models/product");

router.get("/", (req, res) => {
    Product
        .find()
        .exec()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ error: err }));
});

router.get("/:id", async (req, res) => {
    Product
        .findById(id)
        .exec()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ error: err }));
});

router.post("/", (req, res) => {
    Product
        .create({
            name: req.body.name,
            price: req.body.price,
        })
        .then(result => {
            console.log(result);
            res.status(200).json({ message: "Product has been created", object: result })
        })
        .catch(err => res.status(500).json({ error: err }));
});

router.patch("/:id", (req, res) => {
    const id = req.params.id;
    Product.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ error: err }))
});

router.delete("/:id", (req, res) => {
    Product
        .deleteOne({ _id: id })
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ error: err }));
});

module.exports = router;