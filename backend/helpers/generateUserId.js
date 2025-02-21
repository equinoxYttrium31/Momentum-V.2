const UsersModel = require('../models/User');

const generateUserId = async () => {
	const now = new Date();
	const yearMonth = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}`;

	// Find last user sorted by userId in descending order
	const lastUser = await UsersModel.findOne({ userID: { $regex: `^${yearMonth}-\\d{5}$` } })
		.sort({ userID: -1 }) // Sort correctly
		.lean();

	let sequenceNumber = '00001';

	if (lastUser && lastUser.userID) {
		const lastSequence = parseInt(lastUser.userID.split('-')[1], 10);
		sequenceNumber = String(lastSequence + 1).padStart(5, '0');
	}

	const userID = `${yearMonth}-${sequenceNumber}`;
	console.log('Generated UserID:', userID); // Debugging

	return userID; // Always returns a valid userID
};

module.exports = generateUserId;
