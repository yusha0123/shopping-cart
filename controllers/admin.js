const path = require("path");

exports.add_product = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-item.html"));
};

exports.add = (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
};
