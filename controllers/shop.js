const Product = require("../models/product");
const path = require("path");

exports.home = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "index.html"));
};

exports.contact = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "contact.html"));
};

exports.contact_success = (req, res, next) => {
  res.redirect("/success");
};

exports.success = (req, res, next) => {
  res.send("Form Submitted Successfully!");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fields]) => {
      const products = rows;
      res.status(200).json({ products });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
};

exports.deleteProduct = (req, res, next) => {
  const id = req.params.id;
  Product.deleteByid(id)
    .then(() => {
      res.status(200).json({ success: "true" });
    })
    .catch((err) => {
      console.log(err);
    });
};
