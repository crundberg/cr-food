const express = require('express');

const router = express.Router();

module.exports = ({ app, authService }) => {
	// Get login
	router.get('/api/login', (_req, res) => {
		return res.render('authorize', {
			client_id: '',
			redirect_uri: '',
		});
	});

	// Post login
	router.post('/api/login', async (req, res) => {
		const username = req.body.username || '';
		const password = req.body.password || '';

		try {
			const { user, token } = await authService.login(username, password);
			return res
				.cookie('token', token, {
					httpOnly: true,
				})
				.json({ success: true, user, token });
		} catch (error) {
			return res.json({ success: false, error: error.message });
		}
	});

	// Get logout
	router.get('/api/logout', (_req, res) => {
		res
			.clearCookie('token', {
				httpOnly: true,
			})
			.redirect('/');
	});

	// Export router
	app.use('/', router);
};
