const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    return res
        .status(200)
        .json();
});

router.get("/:id", (req, res) => {
    const id = req.id;
    if (!id) {
        return res
            .status(404)
            .json({ error: "Id is mandatory" });
    }
});

router.post("/", (req, res) => {
    const order = {
        productId: req.body.productId,
        time: req.body.time,
        quantity: req.body.quantity
    };

    return res
        .status(201)
        .json({ message: "Order has been created" });
});

router.patch("/:id", (req, res) => {
    const id = req.id;
    if (!id) {
        return res
            .status(404)
            .json({ error: "Id is mandatory" });
    }

    return res
        .status(200)
        .json({ message: "Order has been updated" });
});

router.delete("/:id", (req, res) => {
    const id = req.id;
    if (!id) {
        return res
            .status(404)
            .json({ error: "Id is mandatory" });
    }

    return res
        .status(200)
        .json({ message: "Order has been deleted" });
});

module.exports = router;