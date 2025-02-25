const ConcernsModel = require('../models/Concern');

const generateConcernId = async () => {
	try {
		const now = new Date();
		const yearMonth = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}`;

		let concernID;
		let isDuplicate = true;
		let sequenceNumber = 1;

		// Keep generating concernID until we find a unique one
		while (isDuplicate) {
			concernID = `CNC-${yearMonth}-${String(sequenceNumber).padStart(5, '0')}`;

			// Check if the concernID already exists
			const existingConcern = await ConcernsModel.findOne({ concernID }).lean();
			if (!existingConcern) {
				isDuplicate = false; // Found a unique ID
			} else {
				sequenceNumber++; // Increment the sequence number and try again
			}
		}

		return concernID;
	} catch (error) {
		console.error('Error generating concern ID:', error);
		throw new Error('Failed to generate concern ID');
	}
};

module.exports = generateConcernId;
