
const model = require('../models/post');
const debug = require('debug')('app');

const { nav } = require('../menus/main');


exports.home = async (req, res) => {
  await model.getPosts().then((data) => {
    res.render(
      'index',
      {
        title: 'Express.js Blog',
        nav,
        excerpt: 'A Blog created using express.js',
        posts: data
      }
    );
  });
};


exports.about = (req, res) => {
  res.render(
    'about',
    {
      title: 'About',
      nav,
      excerpt: 'A Blog created using express.js'
    }
  );
};
exports.contact = (req, res) => {
  res.render(
    'contact',
    {
      title: 'Contact',
      nav,
      excerpt: 'A Blog created using express.js'
    }
  );
};
exports.login = (req, res) => {
  res.render(
    'login',
    {
      title: 'Login',
      nav,
      excerpt: 'A Blog created using express.js'
    }
  );
};
