const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const blogController = require('../controllers/blog');

// [POST] : /v1/blog/register
router.post('/post', 
  [
    body('title').isLength({min: 5}).withMessage('Invalid title'), 
    body('body').isLength({min: 5}).withMessage('Invalid body'), 
  ], blogController.createBlogPost);
  
// [GET] : /v1/blog
router.get('/posts', blogController.getAllBlogPost);

module.exports = router;