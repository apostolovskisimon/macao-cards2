const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const userRouter = require("./routes/auth/routes");

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
app.use("/users", userRouter);

const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, options);

io.on("connection", (socket) => {
  console.log("someone connected", socket.id);
});

httpServer.listen(port, null, null, () => console.log("running on port", port));
