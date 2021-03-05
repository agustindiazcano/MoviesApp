const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const user = new mongoose.Schema({
  username: String,
  password: String,
  favorites: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("User", user);
