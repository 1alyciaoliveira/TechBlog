const router = require('express').Router();
const Post = require('../../models/Post');

//create a post
router.post('/', async (req, res) => {
    try {
        const postData = await Post.create({
            title: req.body.title,
            description: req.body.description,
        });

        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});

modules.exports = router;