const mongoose = require("mongoose");

const promptSchema = new mongoose.Schema({
  title: String,
  description: String,
  promptText: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  likes: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("Prompt", promptSchema);