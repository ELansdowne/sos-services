
const mysql = require('mysql');

 connection = mysql.createConnection({
    host: "localhost",
    port:"3306",
    user: "root",
    password: "password",
    database:"sos"
  });

module.exports = connection;