const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

// [POST] : /v1/blog/register
router.post('/register', authController.register);

module.exports = router;