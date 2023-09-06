const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../", "views", "index.html"))
);

router.get("/contact", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "contact.html"));
});

router.post("/contact", (req, res, next) => {
  res.redirect("/success");
});

router.get("/success", (req, res, next) => {
  res.send("Form Submitted Successfully!");
});

module.exports = router;
