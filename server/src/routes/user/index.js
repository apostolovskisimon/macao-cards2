const express = require("express");

const userRouter = express.Router();

userRouter.post("/register", (req, res) => {
  const body = req.body;
  console.log("body", body);
});
// define the about route
userRouter.get("/login", (req, res) => {
  res.send("About birds");
});

module.exports = userRouter;
