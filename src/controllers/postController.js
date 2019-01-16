
const model = require('../models/post');
const { guestNav } = require('../menus/main');
const user = require('../models/user');
const debug = require('debug')('app');

exports.index = (req, res) => {
    res.render('posts', {

    });
};

exports.create = (req, res) => {
    res.render('create', {
        nav: guestNav,
        title: 'Create Post',
        excerpt: 'Create a new Post',
    });
};

exports.save = async (req, res) => {
    //res.json(req.body);
    try {
        await model.insertPost({
            title: 'Hello',
            excerpt: 'hellow owrd',
            author: 'Wynton',
            date: '255 Septes',
        });
    } catch (error) {
        debug(error);
    }
    res.redirect('/post/create');
};

exports.view = async (req, res) => {
    const { id } = req.params;
    await model.getPost(id).then((post) => {
        res.render('post', {
            nav: guestNav,
            title: 'View Post',
            excerpt: 'Post Details',
            post
        });
    });
};
