
const model = require('../models/post');
const { nav } = require('../menus/main');


exports.index = (req, res) => {
    res.render('posts', {

    });
};

exports.create = (req, res) => {
    res.render('create', {
        nav,
        title: 'Create Post',
        excerpt: 'Create a new Post',
        posts: model.getPosts()
    });
};

exports.view = async (req, res) => {
    const { id } = req.params;
    await model.getPost(id).then((post) => {
        res.render('post', {
            nav,
            title: 'View Post',
            excerpt: 'Post Details',
            post
        });
    });
};
