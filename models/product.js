const db = require("../utils/database");

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
  save() {}

  static deleteByid(id) {
    return db.execute("DELETE FROM products WHERE id = ?", [id]);
  }

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }

  static fetchById(id) {}
};
