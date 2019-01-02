
const mysql = require('mysql');

 connection = mysql.createConnection({
    host: "127.0.0.1",
    port:"3306",
    user: "root",
    password: "password",
    database:"sos"
  });

module.exports = connection;