const express = require('express');
const router = express.Router();
const isAuthenticated = require('../helpers/middleware');

const { createHabit, fetchUserHabits } = require('../controllers/HabitController');

router.post('/create-habit', isAuthenticated, createHabit);
router.get('/get-user-habit', isAuthenticated, fetchUserHabits);

module.exports = router;
