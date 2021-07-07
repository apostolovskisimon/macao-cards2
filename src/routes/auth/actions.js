const bcrypt = require("bcrypt");
const queries = require("./queries");

const saltRounds = 10;

handleRegister = async (req, res) => {
  const body = req.body;
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(body.password, salt, async (err, hash) => {
      if (err) {
        res.status(400).json({ message: "Something went wrong. Try again." });
      } else {
        try {
          body.password = hash;
          await queries.registerUser(body);
          res.status(200).json({ message: "OK" });
        } catch (error) {
          res.status(400).json({ message: "Something went wrong. Try again." });
        }
      }
    });
  });
};

handleLogin = async (req, res) => {
  const body = req.body;
  const queryRes = await queries.loginUser(body);

  if (!queryRes[0]) {
    res.status(403).json({ message: "Incorrect credentials." });
    return;
  }

  const hashedPw = queryRes[0].password;

  bcrypt.compare(body.password, hashedPw, (err, result) => {
    if (err) {
      res.status(400).json({ message: "Something went wrong. Try again." });
    } else {
      res.status(200).json({ message: "OK" });
    }
  });
};

module.exports = { handleRegister, handleLogin };
