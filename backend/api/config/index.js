// Mongoose connection
// Mongoose connection
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/omdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;