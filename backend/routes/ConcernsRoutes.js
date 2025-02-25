const express = require('express');
const router = express.Router();

const { storeConcerns } = require('../controllers/ConcernsController');

router.post('/send-concern', storeConcerns);

module.exports = router;
