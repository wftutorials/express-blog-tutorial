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

async function insertPost(object) {
    const client = await MongoClient.connect(url);
    client.db('wfTutorials')
        .collection('posts').insertOne(object, (error, result) => {
            if (error) {
                debug(error);
            }
            return result;
        });
}

exports.getPosts = getPosts;

exports.getPost = getPost;

exports.insertPost = insertPost;


exports.addPosts = () => 'not working';

