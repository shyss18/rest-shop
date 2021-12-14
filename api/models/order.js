const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productId: mongoose.Types.ObjectId,
    time: { type: Date, required: true },
    quantity: { type: Number, required: true }
});

module.exports = mongoose.model("Order", orderSchema);