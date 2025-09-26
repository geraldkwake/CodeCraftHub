const express = require('express');
const { createUser } = require('../controllers/userController');
const router = express.Router();

// User routes
router.post('/register', createUser);

module.exports = router;
