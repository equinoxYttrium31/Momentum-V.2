const mongoose = require('mongoose');
const { Schema } = mongoose;

const Concerns = new Schema(
	{
		concernID: {
			type: String,
			unique: true,
		},
		firstName: {
			type: String,
		},
		lastName: {
			type: String,
		},
		email: {
			type: String,
			unique: true,
		},
		concernMessage: {
			type: String,
		},
	},
	{ timestamps: true },
);

const ConcernsModel = mongoose.model('Concerns', Concerns, 'Concerns');

module.exports = ConcernsModel;
