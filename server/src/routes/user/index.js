const express = require("express");
const queries = require("./queries");
const bcrypt = require("bcrypt");

const userRouter = express.Router();

const saltRounds = 10;

userRouter.post("/register", async (req, res) => {
  const body = req.body;
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(body.password, salt, async (err, hash) => {
      if (err) {
        res.send(411).json({ message: "Error sometghingh" });
      } else {
        try {
          body.password = hash;
          await queries.registerUser(body);
          res.status(200).json({ message: "User created" });
        } catch (error) {
          res.status(422).json({ message: "Nemoze" });
        }
      }
    });
  });
});
// define the about route
userRouter.post("/login", async (req, res) => {
  const body = req.body;
  const queryRes = await queries.loginUser(body);
  const hashedPw = queryRes[0].password;
  console.log("queryRes", queryRes[0].password);

  bcrypt.compare(body.password, hashedPw, (err, result) => {
    if (err) res.status(430).json({ message: err });
    console.table(result);
    res.status(200).json({ message: "login success" });
  });
});

module.exports = userRouter;
