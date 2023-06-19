const { Post } = require('../models');
const { User } = require('../models');

const postData = [
    {
        title: 'Test Post 1',
        description: 'This is a test post',
        writer_name: 'Test Writer 1',
        date_created: '2021-09-01 00:00:00',
    },
    {
        title: 'Test Post 2',
        description: 'This is a test post',
        writer_name: 'Test Writer 2',
        date_created: '2021-09-02 00:00:00',
    },
];

const seedPost = async () => {
    const user = await User.findOne({ where: { username: 'testuser1' } });
    const post = postData.map((data) => ({ ...data, user_id: user.id }));
    return Post.bulkCreate(post);
};

module.exports = seedPost;
