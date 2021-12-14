const express = require("express");
const router = express.Router();
const controller = require("../controllers/product");

router.get("/", controller.product_get_all);
router.get("/:id", controller.product_by_id);

router.post("/", controller.create_product);

router.patch("/:id", controller.update_product);

router.delete("/:id", controller.delete_product);

module.exports = router;