const express = require("express");
const userRouter = express.Router();
const actions = require("./actions");

userRouter.post("/register", actions.handleRegister);

userRouter.post("/login", actions.handleLogin);

module.exports = userRouter;
