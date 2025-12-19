const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  id: String,
  userId: String,
  name: String,
  phone: String,
  email: String,
  category: String,
  favorite: Boolean,
  trash: Boolean,
  createdAt: String,
  profilePic: String
});

module.exports = mongoose.model("Contact", ContactSchema);