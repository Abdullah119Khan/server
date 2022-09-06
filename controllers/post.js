const Post = require('../models/post.js')

// Get All Post
exports.getAllPost = async (req, res) => {
  try {
    const getPost = await Post.find()
    return res.status(200).json(getPost)
  } catch(err) {
    return res.status(500).json(err)
  }
}

// Create Post
exports.createPost = async (req, res) => {
  const post = req.body;
  const newPost = new Post(post);

  try {
    const savedPost = await newPost.save();
    return res.status(201).json(savedPost);
  } catch(err) {
    return res.status(500).json(err)
  }
}

// Update Post 
exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const post = req.body;

  try {
    const updatePost = await Post.findByIdAndUpdate(id, post, { new: true });
    return res.status(200).json(updatePost)
  } catch(err) {
    return res.status(500).json(err)
  }
}

// Delete Post
exports.deletePost = async (req, res) => {
  const { id } = req.params;

  try{
    const deletePost = await Post.findByIdAndDelete(id);
    return res.status(200).json(deletePost);
  } catch(err) {
    return res.status(500).json(err)
  }
}

// Like Post
exports.likePost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id)

    const likePost = await Post.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true })
    return res.status(200).json(likePost)
  } catch(err) {
    return res.status(500).json(err)
  }
}