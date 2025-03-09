const Habit = require('../models/Habit');
const { generateHabitID } = require('../helpers/generateHabitID');

const createHabit = async (req, res) => {
	console.log(req.session); // Debugging session data

	const userID = req.session.userId;

	console.log(userID);

	if (!userID) {
		return res.status(401).json({ message: 'User is not authenticated' });
	}

	const habitLog = Array.isArray(req.body.habitLog)
		? req.body.habitLog.map((log) => ({
				progress: log || '', // If it's just a string, set it as the progress
				date: new Date(), // Set the current date for each log
		  }))
		: [];

	const newHabit = new Habit({
		habitID: generateHabitID(userID),
		habitTitle: req.body.habitTitle,
		description: req.body.description,
		duration: req.body.duration,
		enableInsights: req.body.enableInsights,
		enableMilestones: req.body.enableMilestones,
		enableNotifications: req.body.enableNotifications,
		enableReminder: req.body.enableReminder,
		enableSuggestions: req.body.enableSuggestions,
		endDate: req.body.endDate,
		frequency: req.body.frequency,
		goalType: req.body.goalType,
		goalValue: req.body.goalValue,
		habitLog: habitLog,
		reminderTime: req.body.reminderTime,
		startDate: req.body.startDate,
		tags: req.body.tags,
		user: userID,
	});

	await newHabit.save();

	res.status(201).json({ message: 'Habit created successfully', habit: newHabit });
};

const fetchUserHabits = async (req, res) => {
	const userID = req.session.userId;
	console.log(userID);

	try {
		if (!userID) {
			return res.status(401).json({ message: 'User is not authenticated' });
		}

		const habits = await Habit.find({ user: userID });
		console.log(habits);

		if (!habits.length) {
			return res.status(404).json({ message: 'No habits found' });
		}

		res.status(200).json(habits);
	} catch (error) {
		console.error(error, 'Failed fetching Habits');
		res.status(500).json({ message: 'Internal Server Error' });
	}
};

module.exports = { createHabit, fetchUserHabits };
