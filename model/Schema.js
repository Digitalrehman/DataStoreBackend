let mongoose = require("mongoose");
let schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  Created_on: {
    type: Date,
    default: Date.now(),
  },
});
let User = mongoose.model("User", schema);
module.exports = User;
