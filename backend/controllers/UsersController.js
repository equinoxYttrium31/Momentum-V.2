const { hashPassword, comparePassword } = require('../helpers/hashPasswords');
const mongoose = require('mongoose');
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const UsersModel = require('../models/User');
const getNextAvailableID = require('../helpers/generateUserId');

const createUser = async (req, res) => {
	try {
		const { firstName, lastName, contactNumber, email, password, confirmPassword } = req.body;

		if (!firstName || !lastName || !contactNumber || !email || !password) {
			return res.status(400).json({ message: 'Please fill out all the fields.' });
		}

		const checkedEmail = await UsersModel.findOne({ email });

		if (checkedEmail) {
			return res.status(400).json({ message: 'Email already exist.' });
		}

		if (password != confirmPassword) {
			return res.status(400).json({ message: 'Password do not match.' });
		}

		const hashedPassword = await hashPassword(password);
		const userID = await getNextAvailableID();

		const fullName = `${firstName} ${lastName}`;

		const newUser = new UsersModel({
			userID,
			firstName,
			lastName,
			fullName,
			contactNumber,
			email,
			password: hashedPassword,
		});

		UsersModel.create(newUser)
			.then((user) => {
				res.status(201).json({ message: 'User created successfully', user });
			})
			.catch((error) => {
				res.status(500).json({ message: 'Error creating user', error });
			});
	} catch (error) {
		console.error('Error creating user:', error);
		res.status(500).json({ message: 'Internal server error' });
	}
};

const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({ message: 'Email and password are required' });
		}

		const user = await UsersModel.findOne({ email });
		if (!user) {
			return res.status(401).json({ message: 'Invalid email or password' });
		}

		const isPasswordValid = await comparePassword(password, user.password);
		if (!isPasswordValid) {
			return res.status(401).json({ message: 'Invalid email or password' });
		}

		// ✅ Set session variables correctly
		req.session.userId = user.userID;
		req.session.userEmail = user.email;
		req.session.user = { id: user.userID, email: user.email };

		console.log('Session after login:', req.session);

		// ✅ Ensure the session is saved before responding
		req.session.save((err) => {
			if (err) {
				console.error('Session save error:', err);
				return res.status(500).json({ message: 'Failed to save session' });
			}

			res.status(200).json({
				message: 'Login successful',
				redirectTo: '/dashboard',
				user: { id: user.userID, email: user.email },
			});
		});
	} catch (error) {
		console.error('Login error:', error);
		res.status(500).json({ message: 'Internal server error' });
	}
};

const logoutUser = (req, res) => {
	req.session.destroy((err) => {
		if (err) {
			return res.status(500).json({ message: 'Logout failed' });
		}
		res.clearCookie('connect.sid');
		console.log('Logged out successfully');
		res.status(200).json({ message: 'Logged out successfully' });
	});
};

const fetchUser = async (req, res) => {
	try {
		const user = await UsersModel.findOne({ userID: req.session.userId })
			.select('-password')
			.exec();
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}
		res.status(200).json({ user });
	} catch (error) {
		console.error('Error fetching user:', error);
		res.status(500).json({ message: 'Internal server error' });
	}
};

module.exports = { createUser, loginUser, logoutUser, fetchUser };
