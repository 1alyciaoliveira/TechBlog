const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');
const app = express();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/blog-routes'));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});