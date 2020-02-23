const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  message: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Contact", ContactSchema);
