const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const db = require("./utils/database");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

db.execute("SELECT * FROM products")
  .then((result) => {
    console.log(result[0]);
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.get("*", (req, res, next) =>
  res.status(404).sendFile(path.join(__dirname, "views", "error.html"))
);

app.listen(3000, () => console.log("Server is Running!"));
