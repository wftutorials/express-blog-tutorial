const express = require('express');

const postRouter = express.Router();
const controller = require('../controllers/postController');

function router(nav) {
  postRouter.route('/')
    .get((req, res) => {
      res.render(
        'bookListView',
        {
          nav,
          title: 'Library',
        }
      );
    });

  postRouter.route('/create')
    .get(controller.create);

  postRouter.route('/:id')
  .get(controller.view);

  return postRouter;
}


module.exports = router;
