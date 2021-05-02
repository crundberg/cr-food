const database = require('../lib/database');
const AuthModel = require('../models/auth');
const AuthService = require('../services/auth');

const authModel = AuthModel({ database });
const authService = AuthService({ authModel });

module.exports = {
	authService,
};
