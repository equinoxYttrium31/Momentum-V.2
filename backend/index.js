const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');
const socketIo = require('socket.io');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const isAuthenticated = require('./helpers/middleware');

const usersRoutes = require('./routes/UsersRoutes');

require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
	cors: {
		origin: 'http://localhost:5173',
		methods: ['GET', 'POST'],
		allowedHeaders: ['Content-Type', 'Authorization'],
		credentials: true,
	},
});

app.use(
	cors({
		origin: 'http://localhost:5173',
		methods: ['GET', 'POST'],
		allowedHeaders: ['Content-Type', 'Authorization'],
		credentials: true,
	}),
);

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		store: MongoStore.create({
			mongoUrl: process.env.MongoURI,
			collectionName: 'sessions',
		}),
		cookie: { secure: false, httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }, // 1-day session
	}),
);

app.use(express.json());
app.use('/', usersRoutes);

mongoose
	.connect(process.env.MongoURI)
	.then(() => console.log('Database Connected'))
	.catch((err) => console.log('Failed to Connect!', err));

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

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
