const express = require("express");
const router = express.Router();
const controller = require("../controllers/order");

router.get("/", controller.order_get_all);
router.get("/:id", controller.order_by_id);

router.post("/", controller.create_order);

router.patch("/:id", controller.update_order);

router.delete("/:id", controller.delete_order);

module.exports = router;