// const con = require("../../database/db");

registerUser = (data) => {
  const query = "INSERT INTO Users(email, displayName, password) VALUES(?,?,?)";
  return new Promise((res, rej) => {
    con.query(
      query,
      [data.email, data.displayName, data.password],
      (error, results) => {
        if (error) {
          console.table(error);
          rej(error);
        } else {
          console.table(results);
          res(results);
        }
      }
    );
  });
};

loginUser = (data) => {
  const query = "SELECT * FROM `Users` WHERE email = ?";
  return new Promise((res, rej) => {
    con.query(query, [data.email], (error, results) => {
      if (error) {
        console.table(error);
        rej(error);
      } else {
        console.table(results);
        res(results);
      }
    });
  });
};

module.exports = {
  registerUser,
  loginUser,
};
