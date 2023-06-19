const { User } = require('../models');

const userData = [
    {
        username: 'testuser1',
        password: 'password1',
    },
    {
        username: 'testuser2',
        password: 'password2',
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;