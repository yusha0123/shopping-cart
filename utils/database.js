const Sequelize = require("sequelize");

const sequelize = new Sequelize("yusha", "root", "yusha1234", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
