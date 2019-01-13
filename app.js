const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
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

app.use('/post', postRouter);

const summaryPosts = [
  {
    title: 'Man must explore, and this exploration at its greatest',
    excerpt: 'Problems look mighty small from 150 miles up',
    author: 'Lev Nikolayevich Tolstoy',
    date: 'September 24, 2018'
  },
  {
    title: 'I believe every human has a finite number of heartbeats.',
    excerpt: 'I aint wasting mine',
    author: 'BoogieMan Doctor',
    date: 'September 18, 2018'
  },
];
app.get('/', (req, res) => {
  res.render(
    'index',
    {
      title: 'Express.js Blog',
      nav,
      excerpt: 'A Blog created using express.js',
      posts: summaryPosts
    }
  );
});

app.get('/about', (req, res) => {
  res.render(
    'about',
    {
      title: 'About',
      nav,
      excerpt: 'A Blog created using express.js'
    }
  );
});

app.get('/contact', (req, res) => {
  res.render(
    'contact',
    {
      title: 'Contact',
      nav,
      excerpt: 'A Blog created using express.js'
    }
  );
});

app.get('/login', (req, res) => {
  res.render(
    'login',
    {
      title: 'Login',
      nav,
      excerpt: 'A Blog created using express.js'
    }
  );
});

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});
