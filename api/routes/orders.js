const express = require("express");
const router = express.Router();

const Order = require("../models/order");

router.get("/", (req, res) => {
    Order
        .find()
        .exec()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ error: err }));
});

router.get("/:id", (req, res) => {
    Order
        .findById(id)
        .exec()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ error: err }));
});

router.post("/", (req, res) => {
    Order
        .create({
            productId: req.body.productId,
            quantity: req.body.quantity,
            time: req.body.time,
        })
        .then(result => {
            console.log(result);
            res.status(200).json({ message: "Order has been created", object: result });
        })
        .catch(err => res.status(500).json({ error: err }));
});

router.patch("/:id", (req, res) => {
    const id = req.params.id;
    Order.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ error: err }))
});

router.delete("/:id", (req, res) => {
    Order
        .deleteOne({ _id: id })
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ error: err }));
});

module.exports = router;