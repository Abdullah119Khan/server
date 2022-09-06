const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  creator: String,
  tags: [String],
  message: String,
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Post', postSchema);