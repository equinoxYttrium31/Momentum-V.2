const express = require('express');
const router = express.Router();
const isAuthenticated = require('../helpers/middleware');

const { createHabit } = require('../controllers/HabitController');

router.post('/create-habit', isAuthenticated, createHabit);

module.exports = router;
