const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema(
	{
		habitID: {
			type: String,
			unique: true,
		},
		habitTitle: {
			type: String,
			required: [true, 'Habit title is required'],
		},
		description: {
			type: String,
			default: '',
		},
		tags: {
			type: [String],
			default: [],
		},
		frequency: {
			type: String,
			enum: ['daily', 'weekly', 'monthly', 'custom'],
			required: [true, 'Frequency is required'],
		},
		duration: {
			type: Number,
			min: [1, 'Duration must be at least 1 minute'],
			required: [true, 'Duration is required'],
		},
		startDate: {
			type: Date,
			default: Date.now,
		},
		endDate: {
			type: Date,
			default: null,
		},
		enableReminder: {
			type: Boolean,
			default: false,
		},
		reminderTime: {
			type: String,
			default: '',
		},
		enableNotifications: {
			type: Boolean,
			default: false,
		},
		goalType: {
			type: String,
			default: '',
		},
		goalValue: {
			type: Number,
			default: 0,
		},
		enableMilestones: {
			type: Boolean,
			default: false,
		},
		habitLog: [
			{
				date: { type: Date, default: Date.now },
				progress: { type: String, default: '' },
			},
		],
		enableSuggestions: {
			type: Boolean,
			default: false,
		},
		enableInsights: {
			type: Boolean,
			default: false,
		},
		user: { type: String, required: true },
	},
	{
		timestamps: true,
	},
);

habitSchema.methods.addLog = function (log) {
	this.habitLog.push(log);
	return this.save();
};

habitSchema.virtual('milestonesCompleted').get(function () {
	return this.habitLog.filter((log) => log.progress === 'completed').length;
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;
