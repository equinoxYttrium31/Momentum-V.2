const ConcernsModel = require('../models/Concern');
const generateConcernId = require('../helpers/generateConcernID');

const storeConcerns = async (req, res) => {
	try {
		const { firstName, lastName, email, concernMessage } = req.body;

		if (!firstName || !lastName || !email || !concernMessage) {
			return res.status(400).json({ message: 'Please fill out all the fields.' });
		}

		const concernID = await generateConcernId();

		const newConcern = new ConcernsModel({
			concernID,
			firstName,
			lastName,
			email,
			concernMessage,
		});

		// Use save method here for better readability
		await newConcern.save();

		res.status(201).json({ message: 'Concern sent successfully!', concern: newConcern });
	} catch (error) {
		console.error('Error sending concern:', error);
		res.status(500).json({ message: 'Internal server error' });
	}
};

module.exports = { storeConcerns };
