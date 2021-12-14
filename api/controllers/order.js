const Order = require("../models/order");

exports.order_get_all = (req, res, next) => {
    Order
        .find()
        .exec()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ error: err }));
};

exports.order_by_id = (req, res, next) => {
    Order
        .findById(id)
        .exec()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ error: err }));
};

exports.create_order = (req, res, next) => {
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
};

exports.update_order = (req, res, next) => {
    const id = req.params.id;
    Order.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ error: err }))
};

exports.delete_order = (req, res, next) => {
    Order
        .deleteOne({ _id: id })
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ error: err }));
};