const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "macao",
  // password: ""
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;
