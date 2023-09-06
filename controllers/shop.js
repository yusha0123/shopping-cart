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
