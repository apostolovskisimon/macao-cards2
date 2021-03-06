const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  displayName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  highScore: {
    type: Number,
    required: false,
    default: 0,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
    required: false,
  },
});

const User = mongoose.model("users", UsersSchema);
module.exports = User;
