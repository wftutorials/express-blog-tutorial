
const model = require('../models/post');
const debug = require('debug')('app');
const passport = require('passport');
const nav = require('../menus/main');
const user = require('../models/user');

function getNavs(req) {
  if (user.isGuest(req)) {
    return nav.guestNav;
  }
  return nav.userNav;
}

exports.home = async (req, res) => {
  await model.getPosts().then((data) => {
    res.render(
      'index',
      {
        username: user.userName(req),
        title: 'Express.js Blog',
        nav: getNavs(req),
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
      nav: getNavs(req),
      excerpt: 'A Blog created using express.js'
    }
  );
};
exports.contact = (req, res) => {
  res.render(
    'contact',
    {
      title: 'Contact',
      nav: getNavs(req),
      excerpt: 'A Blog created using express.js'
    }
  );
};
exports.login = (req, res) => {
  res.render(
    'login',
    {
      title: 'Login',
      nav: getNavs(req),
      excerpt: 'A Blog created using express.js'
    }
  );
};
exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};
exports.auth = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
});
