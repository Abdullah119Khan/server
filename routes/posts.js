const express = require('express')
const { createPost, getAllPost, updatePost, deletePost, likePost } = require('../controllers/post')
const router = express.Router()

router.get('/posts/getAllPost', getAllPost)
router.post('/posts/createPost', createPost)
router.patch('/posts/update/:id', updatePost)
router.delete('/posts/delete/:id', deletePost)
router.patch('/posts/:id/like', likePost)

module.exports = router;