import { Socket } from "socket.io";
const app = require("express")();
const httpServer = require("http").createServer(app);
const dotenv = require("dotenv");
const mysql = require('mysql')

const options = {
  cors: {
    allowHeaders: "*",
    methods: ["GET", "POST"],
  },
};

dotenv.config();

const port = process.env.PORT;

const io = require("socket.io")(httpServer, options);


const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "testsimon",
  // password: ""
});

con.connect((err: string) => {
  if (err) throw err;
  console.log("Connected!");
  con.query('SELECT * FROM users WHERE DisplayName = "hhh"', (error: unknown, res: any) => {
  if (err) throw err;
    console.log('res', res)
  })
});


io.on("connection", (socket: Socket) => {
  console.log('someone connected', socket.id)
});

httpServer.listen(port, null, null, () => console.log("running on port", port));
