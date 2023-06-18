const router = require('express').Router();
const Post = require('../models/Post');

//get all posts
router.get('/', async (req, res) => {
    const postsData = await Post.findAll().catch((err) => {
        res.json(err);
    });

    const posts = postsData.map((post) => post.get({ plain: true }));
    res.render('home', { posts });
});

//get one post
router.get('/post/:id', async (req, res) => {
    try {
        const postsData = await Post.findByPk(req.params.id);
        const posts = postsData.get({ plain: true });
        res.render('post', posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;