const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    media_url: [],
    text: {
      type: String
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true
    },
    date: {
      type: Date,
      default: Date.now(),
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("posts", postSchema);
