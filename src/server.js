const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const userRouter = require("./routes/auth/routes");
const cors = require("cors");

const options = {
  cors: {
    allowHeaders: "*",
    methods: ["GET", "POST"],
  },
};

dotenv.config();

const port = Number(process.env.PORT);

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASS;
const mongoDb = process.env.MONGO_DB;

const uri = `mongodb+srv://${mongoUser}:${mongoPass}@cluster0.mquyh.mongodb.net/${mongoDb}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let isMongo = false;

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connection established to MongoDB");
  isMongo = true;
});

// routes
// app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send(`Server running, mongo is ${isMongo}`);
});

const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, options);

io.on("connection", (socket) => {
  console.log("someone connected", socket.id);

  socket.on("newUser", (args) => {
    console.table(args);
  });

  socket.on("create new game", (args) => {
    console.table(args);
  });
});

httpServer.listen(port, null, null, () => console.log("running on port", port));
