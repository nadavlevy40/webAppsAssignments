let comments = []; // In-memory data

exports.addComment = (req, res) => {
    const { postId } = req.params;
    const { id, text, userId } = req.body;
    const newComment = { id, postId, text, userId };
    comments.push(newComment);
    res.status(201).json({ message: 'Comment added', comment: newComment });
};

exports.getCommentsByPost = (req, res) => {
    const { postId } = req.params;
    const postComments = comments.filter(c => c.postId === postId);
    res.json(postComments);
};

exports.updateComment = (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    const commentIndex = comments.findIndex(c => c.id === id);
    if (commentIndex !== -1) {
        comments[commentIndex].text = text;
        res.json({ message: 'Comment updated', comment: comments[commentIndex] });
    } else {
        res.status(404).json({ message: 'Comment not found' });
    }
};

exports.deleteComment = (req, res) => {
    const { id } = req.params;
    const commentIndex = comments.findIndex(c => c.id === id);
    if (commentIndex !== -1) {
        const removedComment = comments.splice(commentIndex, 1);
        res.json({ message: 'Comment deleted', comment: removedComment });
    } else {
        res.status(404).json({ message: 'Comment not found' });
    }
};

exports.getAllComments = (req, res) => {
    res.json(comments);
};
