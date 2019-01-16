const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const auth = require('./src/models/login');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'tutorial' }));
auth.localStrategy();
app.use(passport.initialize());
app.use(passport.session());
auth.initalizePassport();

app.use(express.static(path.join(__dirname, '/public/')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

const nav = [
  { link: '/', title: 'Home' },
  { link: '/about', title: 'About' },
  { link: '/contact', title: 'Contact' },
  { link: '/post/create', title: 'Create' },
  { link: '/login', title: 'Login' }
];

const postRouter = require('./src/routes/postRoutes')(nav);
const homeRouter = require('./src/routes/homeRoutes');

app.use('/post', postRouter);
app.use('/', homeRouter);

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});
