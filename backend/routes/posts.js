const express = require('express');

const { body } = require('express-validator');

const postsController = require('../controllers/posts');

const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', postsController.getAllPosts);
router.get('/:id', postsController.getByID);
router.get('/', auth, postsController.fetchAll);

router.post(
  '/',
  [
    auth,
    body('title').trim().isLength({ min: 5 }).not().isEmpty(),
    body('body').trim().isLength({ min: 10 }).not().isEmpty(),
    body('user').trim().not().isEmpty(),
  ],
  postsController.postPost
);

router.delete('/:id', auth, postsController.deletePost);
// router.get('/:id', auth, postsController.getByID);

module.exports = router;
