const express = require('express');
const router = express.Router();
const isAuthenticated = require('../helpers/middleware');

const { createUser, loginUser, logoutUser } = require('../controllers/UsersController');

router.post('/create-user', createUser);
router.post('/login', loginUser);
router.post('/logout', isAuthenticated, logoutUser);

module.exports = router;
