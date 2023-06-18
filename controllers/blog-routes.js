const router = require('express').Router();
const Post = require('../models/Post');

//get all posts
router.get('/', async (req, res) => {
    try {
    const posts = await Post.findAll();
    res.render('home', posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get one post
router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);
        res.render('post', postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;