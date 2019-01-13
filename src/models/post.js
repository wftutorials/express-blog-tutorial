const { MongoClient, ObjectID } = require('mongodb');

const debug = require('debug')('app');

const url = 'mongodb://localhost:27017';


async function getPosts() {
    const client = await MongoClient.connect(url);
    const posts = client.db('wfTutorials')
        .collection('posts')
        .find()
        .toArray();
    return posts;
}

async function getPost(id) {
    const client = await MongoClient.connect(url);
    const post = client.db('wfTutorials')
        .collection('posts').findOne({
        _id: new ObjectID(id)
    });
    return post;
}

exports.getPosts = getPosts;

exports.getPost = getPost;


exports.addPosts = () => 'not working';

