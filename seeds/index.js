const sequelize = require('../config/connection');
const Post = require('../models/Post');
const postData = require('./postData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Post.bulkCreate(postData, {
        individualHooks: true, //que es esto?
        returning: true, //que es esto?
    });

    process.exit(0);
};

seedDatabase();