const UsersModel = require('../models/User');

const getNextAvailableID = async () => {
	try {
		// Fetch only userID field, sorted in ascending order
		const users = await UsersModel.find({}, { userID: 1, _id: 0 }).sort({ userID: 1 }).lean();

		if (!users.length) return '202502-00001'; // If no users exist, start from 1

		// Extract the numerical part of the userID and convert them to integers
		const existingIDs = new Set(users.map((user) => parseInt(user.userID.split('-')[1], 10)));

		let lastID = parseInt(users[users.length - 1].userID.split('-')[1], 10); // Get the last ID as a number

		// Find the first missing ID in sequence
		for (let i = 1; i <= lastID; i++) {
			if (!existingIDs.has(i)) return `202502-${i.toString().padStart(5, '0')}`;
		}

		// If no gaps, return next available ID with padding
		return `202502-${(lastID + 1).toString().padStart(5, '0')}`;
	} catch (error) {
		console.error('Error finding next ID:', error);
		throw error;
	}
};

module.exports = getNextAvailableID;
