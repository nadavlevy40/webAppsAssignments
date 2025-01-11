const express = require('express');
const { addComment, getCommentsByPost, updateComment, deleteComment, getAllComments } = require('../controllers/commentController');

const router = express.Router();

// Route definitions for comments
router.post('/posts/:postId/comment', addComment);                // POST /comment/:postId/comment - Add a comment to a specific post
router.get('/posts/:postId/comments', getCommentsByPost);  // GET /comment/:postId/comments - Get all comments for a specific post
router.get('/', getAllComments);                     // GET /comment - Get all comments
router.put('/:id', updateComment);
router.delete('/:id', deleteComment);                  // DELETE /comment/:id - Delete a comment by comment ID
                  

module.exports = router;
