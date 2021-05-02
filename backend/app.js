const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const config = require('./config');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
	cors({
		origin: [config.cors.local, config.cors.remote],
		credentials: true,
	})
);

require('./api/routes')(app);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
	next(createError(404));
});

// Handle error
app.use((err, req, res, next) => {
	if (err.name === 'UnauthorizedError') {
		res.status(401).json({ success: false, error: err.message });
	} else {
		res.status(500).json({ success: false, error: err.message });
	}

	next(err);
});

module.exports = app;
