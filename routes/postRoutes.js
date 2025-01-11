const express = require('express');
const { addPost, getAllPosts, deleteAllPosts, getPostById, getPostsBySender, updatePost } = require('../controllers/postController');

const router = express.Router();

// Route definitions for posts
router.post('/', addPost);                   // POST /post - Add a new post
router.get('/sender/:senderId', getPostsBySender); // GET /post/sender/:senderId - Get posts by sender
router.get('/', getAllPosts);                // GET /post - Get all posts
router.get('/', deleteAllPosts);   
router.get('/:id', getPostById);             // GET /post/:id - Get a post by ID
router.put('/:id', updatePost);              // PUT /post/:id - Update a post by ID

module.exports = router;
