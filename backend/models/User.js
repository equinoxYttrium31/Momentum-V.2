const mongoose = require('mongoose');
const { Schema } = mongoose;

const Users = new Schema(
	{
		userID: {
			type: String,
			unique: true,
		},
		firstName: {
			type: String,
		},
		lastName: {
			type: String,
		},
		fullName: {
			type: String,
		},
		contactNumber: {
			type: String,
		},
		email: {
			type: String,
			unique: true,
		},
		password: String,
	},
	{ timestamps: true },
);

const UsersModel = mongoose.model('Users', Users, 'Users');

module.exports = UsersModel;
