const AuthModel = ({ database }) => {
	const getUserByUsername = (username) =>
		database.query(
			'SELECT id, username, password, name FROM `users` WHERE username = ?',
			[username]
		);

	const signUp = ({ username, passwordHashed, salt, name }) =>
		database.query(
			'INSERT INTO `users` (username, password, salt, name) VALUES (?, ?, ?, ?) RETURNING id, username, name',
			[username, passwordHashed, salt, name]
		);

	return {
		getUserByUsername,
		signUp,
	};
};

module.exports = AuthModel;
