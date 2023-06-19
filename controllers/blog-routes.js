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

//get all posts by user
router.get('/dashboard', async (req, res) => {
    try {
        const postsData = await Post.findAll({
            where: {
                user_id: req.session.user_id,
            },
        });
        const posts = postsData.map((post) => post.get({ plain: true }));
        res.render('dashboard', { posts });
    } catch (err) {
        res.status(500).json(err);
    }
});

//get login page
router.get('/login', (req, res) => {
    res.render('login');
});

//get register page
router.get(/register/, (req, res) => {
    res.render('register');
});


module.exports = router;