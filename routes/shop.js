const express = require("express");
const {
  home,
  contact,
  contact_success,
  success,
} = require("../controllers/shop");
const router = express.Router();

router.route("/").get(home);
router.route("/contact").get(contact);
router.route("/contact").post(contact_success);
router.route("/success").get(success);

module.exports = router;
