const path = require("path");
const Product = require("../models/product");

exports.add_product = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-item.html"));
};

exports.addProduct = (req, res, next) => {
  console.log(req.body);
  const { title, price, imageUrl, description } = req.body;
  const product = new Product(title, imageUrl, description, price);
  product
    .save()
    .then(() => {
      res.json({ success: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};
