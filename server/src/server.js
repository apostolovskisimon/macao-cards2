const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mysql = require("mysql");
const userRouter = require("./routes/user/index");

const options = {
  cors: {
    allowHeaders: "*",
    methods: ["GET", "POST"],
  },
};

dotenv.config();

const port = Number(process.env.PORT);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use("/user", userRouter);

const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, options);

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "testsimon",
  // password: ""
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  con.query('SELECT * FROM users WHERE DisplayName = "hhh"', (error, res) => {
    if (err) throw err;
    console.log("res", res);
  });
});

io.on("connection", (socket) => {
  console.log("someone connected", socket.id);
});

httpServer.listen(port, null, null, () => console.log("running on port", port));
