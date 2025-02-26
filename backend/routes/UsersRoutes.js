const express = require('express');
const router = express.Router();
const isAuthenticated = require('../helpers/middleware');

const { createUser, loginUser, logoutUser, fetchUser } = require('../controllers/UsersController');

router.post('/create-user', createUser);
router.post('/login', loginUser);
router.post('/logout', isAuthenticated, logoutUser);
router.get('/fetch-user', isAuthenticated, fetchUser);

// Apply the isAuthenticated middleware to the /dashboard route
router.get('/dashboard/', isAuthenticated, (req, res) => {
	if (req.session.user) {
		res.json({ authenticated: true });
	} else {
		res.json({ authenticated: false });
	}
});

module.exports = router;
