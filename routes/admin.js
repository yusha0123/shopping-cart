const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-item.html"));
});

router.post("/add", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
