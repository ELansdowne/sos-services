
const mysql = require('mysql');

 connection = mysql.createConnection({
    host: "202.173.125.142",
    port:"3306",
    user: "root",
    password: "password",
    database:"sos"
  });

module.exports = connection;