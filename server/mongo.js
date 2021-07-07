const mongoose = require("mongoose");

const uri =
  "mongodb+srv://macaoAdmin:macaoAdmin@cluster0.mquyh.mongodb.net/MacaoDB?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => console.log("Connection established to MongoDB"));
