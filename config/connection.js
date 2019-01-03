
const mysql = require('mysql');

 connection = mysql.createConnection({
    host: "amnok.cjss6d6dlgc9.ap-south-1.rds.amazonaws.com",
    port:"3306",
    user: "root",
    password: "password",
    database:"sos"
  });

module.exports = connection;