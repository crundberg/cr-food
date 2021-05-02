const argon2 = require('argon2');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const config = require('../config');

const AuthService = ({ authModel }) => {
	const generateJWT = ({ id, username }) => {
		return jwt.sign(
			{
				data: {
					id,
					username,
				},
			},
			config.jwt.secret,
			{ expiresIn: config.jwt.expiresIn }
		);
	};

	const login = async (username, password) => {
		const [user] = await authModel.getUserByUsername(username);

		if (!user) {
			throw new Error('User not found');
		}

		const correctPassword = await argon2.verify(user.password, password);

		if (!correctPassword) {
			throw new Error('Incorrect password');
		}

		return {
			user: {
				id: user.id,
				username: user.username,
				name: user.name,
			},
			token: generateJWT(user),
		};
	};

	const signUp = async ({ username, password, name }) => {
		const salt = crypto.randomBytes(32);
		const passwordHashed = await argon2.hash(password, { salt });

		const data = {
			username,
			passwordHashed,
			salt: salt.toString('hex'),
			name,
		};

		const [user] = await authModel.signUp(data);

		return {
			user: {
				username: user.username,
				name: user.name,
			},
			token: generateJWT(user),
		};
	};

	return {
		login,
		signUp,
	};
};

module.exports = AuthService;
