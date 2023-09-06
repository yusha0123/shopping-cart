const express = require("express");
const router = express.Router();
const { add_product, add } = require("../controllers/admin");

router.route("/add-product").get(add_product);
router.route("/add").post(add);

module.exports = router;
