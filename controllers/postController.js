let posts = []; // In-memory data

exports.addPost = (req, res) => {
    const { id, title, content, sender } = req.body;
    const newPost = { id, title, content, sender };
    posts.push(newPost);
    res.status(201).json({ message: 'Post created', post: newPost });
};

exports.getAllPosts = (req, res) => {
    res.json(posts);
};

exports.deleteAllPosts = (req, res) => {
    res.json(posts);
};

exports.getPostById = (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
};

exports.getPostsBySender = (req, res) => {
    const { senderId } = req.params;
    const senderPosts = posts.filter(p => p.sender === senderId);
    res.json(senderPosts);
};

exports.updatePost = (req, res) => {
    const { id } = req.params;
    const { title, content, sender } = req.body;
    const postIndex = posts.findIndex(p => p.id === id);
    if (postIndex !== -1) {
        posts[postIndex] = { id, title, content, sender };
        res.json({ message: 'Post updated', post: posts[postIndex] });
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
};

exports.addCommentToPost = (req, res) => {
    const post = posts.find(p => p.id === req.params.postId);
    if (post) {
        const { id, text, userId } = req.body;
        const newComment = { id, text, userId, createdAt: new Date() };
        post.comments.push(newComment);
        res.status(201).json({ message: 'Comment added to post', comment: newComment });
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
};
