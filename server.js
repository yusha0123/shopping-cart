const express = require("express");
const path = require("path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const sequelize = require("./utils/database");
const User = require("./models/user");
const Product = require("./models/product");

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(async (req, res, next) => {
  try {
    const user = await User.findByPk(1);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
});
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.get("*", (req, res, next) =>
  res.status(404).sendFile(path.join(__dirname, "views", "error.html"))
);

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);

sequelize
  .sync()
  .then((result) => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({
        name: "yusha",
        email: "test@gmail.com",
      });
    }
    return user;
  })
  .then((user) => {
    app.listen(3000, () => console.log("Server is Running!"));
  })
  .catch((err) => {
    console.log(err);
  });
