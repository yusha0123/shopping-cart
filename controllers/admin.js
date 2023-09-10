const path = require("path");
const Product = require("../models/product");

exports.add_product = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-item.html"));
};

exports.addProduct = async (req, res, next) => {
  const { title, price, imageUrl, description } = req.body;
  try {
    await req.user.createProduct({
      title: title,
      price: price,
      imageUrl: imageUrl,
      description: description,
    });
    res
      .status(201)
      .json({ success: true, message: "Data Inserted Successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};
