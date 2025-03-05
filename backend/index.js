const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');
const socketIo = require('socket.io');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const compression = require('compression');
const path = require('path');
const isAuthenticated = require('./helpers/middleware');

const usersRoutes = require('./routes/UsersRoutes');
const concernsRoutes = require('./routes/ConcernsRoutes');
const habitRoutes = require('./routes/HabitRoutes');

require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
	cors: {
		origin: 'http://localhost:5173',
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		allowedHeaders: ['Content-Type', 'Authorization'],
		credentials: true,
	},
});

app.use(compression({ threshold: 0 }));

// Apply CORS middleware
app.use(
	cors({
		origin: 'http://localhost:5173',
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		allowedHeaders: ['Content-Type', 'Authorization'],
		credentials: true, // Allow cookies/session
	}),
);

app.use(express.json());

// Session middleware
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		store: MongoStore.create({
			mongoUrl: process.env.MongoURI,
			collectionName: 'sessions',
		}),
		cookie: {
			secure: false, // If running in dev, make sure this is false
			httpOnly: true,
			maxAge: 24 * 60 * 60 * 1000, // 1-day session
			sameSite: 'lax', // Important for CORS in dev mode
		},
	}),
);

// Connect to MongoDB
mongoose
	.connect(process.env.MongoURI)
	.then(() => console.log('Database Connected'))
	.catch((err) => console.log('Failed to Connect!', err));

// Socket.io setup
io.on('connection', (socket) => {
	console.log('A user connected');
	socket.emit('welcome', 'Welcome to the server!');

	socket.on('customEvent', (data) => {
		console.log('Received data:', data);
	});

	socket.on('disconnect', () => {
		console.log('A user disconnected');
	});
});

// Set up routes for users and concerns
app.use('/', usersRoutes);
app.use('/', concernsRoutes);
app.use('/', habitRoutes);

// Serve static files from the frontend directory (assuming no build directory)
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Catch-all route to serve the frontend index.html for all other requests
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

// Start the server
server.listen(3000, () => {
	console.log('Server is running on port 3000');
});
