const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  savedPrompts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Prompt" }]
});

module.exports = mongoose.model("User", userSchema);