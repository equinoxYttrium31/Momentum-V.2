const generateHabitID = (userID) => {
	if (!userID) {
		throw new Error('User ID is required to generate Habit ID');
	}

	const randomID = Math.floor(10000 + Math.random() * 90000);

	const currentDate = new Date();
	const formattedDate = currentDate.toISOString().split('T')[0].replace(/-/g, '');

	const habitID = `${userID}-${formattedDate}-${randomID}`;

	return habitID;
};

module.exports = { generateHabitID };
