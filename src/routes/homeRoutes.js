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

module.exports = homeRouter;
