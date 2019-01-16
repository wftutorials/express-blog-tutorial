const express = require('express');

const homeRouter = express.Router();
const controller = require('../controllers/homeController');

homeRouter.route('/')
.get(controller.home);

homeRouter.route('/about')
.get(controller.about);

homeRouter.route('/contact')
.get(controller.contact);

homeRouter.route('/login')
.get(controller.login);

homeRouter.route('/login')
.post(controller.auth);

homeRouter.route('/logout')
.get(controller.logout);

module.exports = homeRouter;
