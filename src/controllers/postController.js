
const model = require('../models/post');
const { guestNav } = require('../menus/main');
const user = require('../models/user');
const debug = require('debug')('app');


function renderCreateView(res, status) {
    res.render('create', {
        formSubmit: status,
        nav: guestNav,
        title: 'Create Post',
        excerpt: 'Create a new Post',
    });
}


exports.index = (req, res) => {
    res.render('posts', {

    });
};

exports.create = (req, res) => {
    renderCreateView(res, false);
};

exports.save = async (req, res) => {
    try {
        await model.insertPost(req.body);
    } catch (error) {
        debug(error);
    }
    renderCreateView(res, true);
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
