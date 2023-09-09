const express = require("express");
const path = require("path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const sequelize = require("./utils/database");

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.get("*", (req, res, next) =>
  res.status(404).sendFile(path.join(__dirname, "views", "error.html"))
);

sequelize
  .sync()
  .then((result) => {
    app.listen(3000, () => console.log("Server is Running!"));
  })
  .catch((err) => {
    console.log(err);
  });
