const isAuthenticated = (req, res, next) => {
	console.log('Session data in middleware:', req.session);
	if (req.session.userId) {
		next();
	} else {
		res.status(401).json({ message: 'Unauthorized access' });
	}
};

module.exports = isAuthenticated;
