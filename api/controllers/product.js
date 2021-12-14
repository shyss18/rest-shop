const Product = require("../models/product");

exports.product_get_all = (req, res, next) => {
    Product
        .find()
        .exec()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ error: err }));
};

exports.product_by_id = (req, res, next) => {
    Product
        .findById(id)
        .exec()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ error: err }));
};

exports.create_product = (req, res, next) => {
    Product
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

exports.update_product = (req, res, next) => {
    const id = req.params.id;
    Product.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ error: err }))
};

exports.delete_product = (req, res, next) => {
    Product
        .deleteOne({ _id: id })
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ error: err }));
};