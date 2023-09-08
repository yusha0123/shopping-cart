const express = require("express");
const router = express.Router();
const { add_product, addProduct } = require("../controllers/admin");

router.route("/add-product").get(add_product);
router.route("/product").post(addProduct);

module.exports = router;
