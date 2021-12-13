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
    return res
        .status(201)
        .json({ message: "Product has been created" });
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
        .json({ message: "Product has been updated" });
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
        .json({ message: "Product has been deleted" });
});

module.exports = router;