const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "yusha",
  password: "yusha1234",
});

module.exports = pool.promise();
