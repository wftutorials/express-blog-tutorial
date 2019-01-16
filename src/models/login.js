const passport = require('passport');
const { Strategy } = require('passport-local');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app');

const url = 'mongodb://localhost:27017';
const dbName = 'wfTutorials';

async function getUser(username) {
    const client = await MongoClient.connect(url);
    const user = client.db(dbName)
        .collection('users')
        .findOne({ username });
    return user;
}


exports.localStrategy = function localStrategy() {
    const userObject = {
        usernameField: 'username',
        passwordField: 'password'
    };
    const strat = new Strategy(userObject, async (username, password, done) => {
        const user = await getUser(username);
        debug(user);
        if (user.password === password) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
    passport.use(strat);
};

exports.initalizePassport = function initalizePassport() {
    // Stores user in session
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    // Retrieves user from session
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
};
